<template>
        <p v-if="error">Something went wrong...</p>
        <p v-if="loading">Loading...</p>
        <div v-else >
            <!-- <h1>Joueur {{ result.user.player.gamerTag }}</h1> -->

            <div class="table-responsive-lg mx-auto w-100">
                <table class="table-chart">
                    <tbody>
                        <tr v-for="character in result.user.player.recentStandings" :key="character.id">
                            <td>{{ character.entrant.event.tournament.name }}</td>
                            <td v-if="character.placement === 1">{{ character.placement }}st</td>
                            <td v-else-if ="character.placement === 2">{{ character.placement }}nd</td>
                            <td v-else-if ="character.placement === 3">{{ character.placement }}rd</td>
                            <td v-else>{{ character.placement }}th</td>
                            <td>({{ character.entrant.event.videogame.name }})</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import {PLAYER_QUERY} from "../queries/queries"
import { ref } from 'vue'

export default {
    name: 'ChartsComponent', 
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
    setup (props) {
        const variables = ref({
            slug: props.playerSlug,
            // slug: '300903d2'
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
.table-chart {
    width: 100%;
    max-width: 740px;
    border-collapse: collapse;
    text-transform: uppercase;

    td {
        border-top: 1px solid #dee2e6;
    }
    td, th {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.6rem;
        vertical-align: middle;

        @media (min-width: $breakpoint-lg) {
            font-size: inherit;
        }
    }

    @media (min-width: $breakpoint-lg) {
        display: block;
        height: 450px;
        overflow-y: scroll;
    }
}

@media (max-width: 991.98px) {
    .table-responsive-lg {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
}
</style>
