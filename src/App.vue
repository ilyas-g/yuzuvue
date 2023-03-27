<template>

  <nav>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </nav>

  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


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


  <router-view v-slot="{ Component }">
    <!-- *** A REGARDER POUR LES TRANSITIONS ! https://www.youtube.com/watch?v=pG5pwDGc3D4 *** -->
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HeaderNavigation from './components/HeaderNavigation.vue'
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
    // HelloWorld
}
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav a {
  margin: 0 0.5rem;
  color: black;
}

nav a:hover,
nav a.router-link-exact-active {
  color: crimson;
  text-decoration: underline;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

main {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
  will-change: transform, opacity;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
