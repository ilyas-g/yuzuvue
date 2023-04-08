<template>
        <p v-if="error">Something went wrong...</p>
        <p v-if="loading">Loading...</p>
        <div v-else >
            <h1>Joueur {{ result.user.player.gamerTag }}</h1>
            <div v-for="character in result.user.player.recentStandings" :key="character.id">
            <p>{{ character.entrant.event.name }} - {{ character.entrant.event.tournament.name }} - {{ character.placement }} place ({{ character.entrant.event.videogame.name }})</p>
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
