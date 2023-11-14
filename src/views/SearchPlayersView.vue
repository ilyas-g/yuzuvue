<template>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else >
        <h1>Joueur {{ result.user.player.gamerTag }}</h1>

        <perfect-scrollbar>
            <div class="table-responsive-lg">
                <table class="table-chart">
                    <tbody>
                        <tr v-for="character in result.user.tournaments.nodes" :key="character.id">
                            <template v-if="character.startAt * 1000 >= Date.now()">
                                <td><a :href="'https://www.start.gg/' + character.url" target="_blank">{{ character.name }}</a></td>
                                <td>{{ new Date(character.startAt * 1000).toLocaleDateString("fr") }}</td>
                            </template>
                            <!-- <td>({{ character.entrant.event.videogame.name }})</td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import {PLAYER_QUERY} from "../queries/queries"
import { ref } from 'vue'

export default {
name: 'SearchPlayersView',
props: {
    playerSlug: String
},
data () {
    return {
        players: [],
        idStartGG: '',
        // idStartGG: route.params.id
    }
},
setup () {
    const variables = ref({
        // slug: props.playerSlug,
        slug: '54f7f491'
    })
    const { result, loading, error } = useQuery(PLAYER_QUERY, variables);

    return {
        result,
        loading, 
        error
    }
},
}
</script>

<style lang="scss">
@media (min-width: $breakpoint-lg) {
.ps {
    height: 450px;
}

.ps__thumb-y {
    background-color: $sub-color;
}

.ps__rail-y:hover > .ps__thumb-y {
    background-color: $ter-color;
}

.ps .ps__rail-y:hover {
    background-color: transparent;
}
}
.table-chart {
width: 100%;
border-collapse: collapse;
text-transform: uppercase;

    @media screen and (min-width: $breakpoint-lg) {
        max-width: 740px;
    }

    td {
        border-top: 1px solid #dee2e6;
    }

    td, th {
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.6rem;
        vertical-align: middle;

        @media (min-width: $breakpoint-sm) {
            font-size: 17px;
        }
        @media (min-width: $breakpoint-lg) {
            font-size: inherit;
        }
    }

    a{
        color: #dee2e6;
        text-decoration: none;

        &:hover {
            color: yellow;
        }
    }
}

@media (max-width: 991.98px) {
.table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
}
}
</style>
