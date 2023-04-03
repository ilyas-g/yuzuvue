<template>
    <main>
        <h1>Team</h1>
        <p>Page Team
        </p>

        <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="player in players" :key="player.id">
        {{ player.attributes.name }}
      </li>
    </ul>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'TeamView',
    data () {
        return {
        players: [],
        }
    },
    async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/api/players?populate=*')
      this.players = response.data.data
    } catch (error) {
      this.error = error;
    }
  },
}
</script>
