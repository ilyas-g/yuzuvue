<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <!-- <ul>
    <li v-for="value in myObject" :key="value">
      {{ value }}
    </li>
  </ul>

  <p>{{ myObject.title }}</p> -->

  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <div v-else >
    {{ result.user.player.gamerTag }}
    <div v-for="character in result.user.player.recentStandings" :key="character.id">
      <p>{{ character.entrant.event.name }} - {{ character.entrant.event.tournament.name }} - {{ character.placement }} place ({{ character.entrant.event.videogame.name }})</p>
    </div>
  </div>
  <div></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useQuery } from '@vue/apollo-composable'
import {PLAYER_QUERY} from "./queries/queries"

export default {
  name: 'App',
  setup () {
    const { result, loading, error } = useQuery(PLAYER_QUERY);

    return {
      result,
      loading, 
      error,
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
