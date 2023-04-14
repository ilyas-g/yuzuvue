<template>
    <main>
      <h1>Team</h1>
      <p>Page Team</p>

      <div v-if="error">
        {{ error }}
      </div>
      <ul v-else>
        <li v-for="player in players" :key="player.id">
          <router-link :to="{ name: 'player', params: { name: player.attributes.name }}">{{ player.attributes.name }}</router-link>
        </li>
      </ul>
    </main>

    <router-view v-slot="{ Component }">
      <!-- *** A REGARDER POUR LES TRANSITIONS ! https://www.youtube.com/watch?v=pG5pwDGc3D4 *** -->
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
  </router-view>
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
