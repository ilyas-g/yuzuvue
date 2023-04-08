<template>
        <p v-if="error">Something went wrong...</p>
        <p v-if="loading">Loading...</p>
        <div v-else >
            <h1>Joueur</h1>
            <div v-for="character in result.user.player.recentStandings" :key="character.id">
            <p>{{ character.entrant.event.name }} - {{ character.entrant.event.tournament.name }} - {{ character.placement }} place ({{ character.entrant.event.videogame.name }})</p>
            </div>
        </div>
</template>

<script>

export default {
  name: 'HeaderNavigation', 
}
</script>
