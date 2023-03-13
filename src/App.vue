<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <p v-else v-for="character in result.league.standings.nodes" :key="character.id">
    {{ character.entrant.name }}
  </p>
  <div></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useQuery } from '@vue/apollo-composable'
import {STANDING_QUERY} from "./queries/queries"

export default {
  name: 'App',
  setup () {
    const { result, loading, error } = useQuery(STANDING_QUERY);
    return {
      result,
      loading, 
      error
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
