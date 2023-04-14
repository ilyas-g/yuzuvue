<template>

  <nav>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/team">Go to Team</router-link>
    <router-link to="/player">Go to Player</router-link>
  </nav>

  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <ul>
    <li v-for="value in myObject" :key="value">
      {{ value }}
    </li>
  </ul>

  <p>{{ myObject.title }}</p> -->

    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.attributes.name }}
      </li>
    </ul>
<router-view></router-view>

</template>

<script>

{/* <router-view v-slot="{ Component }">
    <!-- *** A REGARDER POUR LES TRANSITIONS ! https://www.youtube.com/watch?v=pG5pwDGc3D4 *** -->
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view> */}
import { useQuery } from '@vue/apollo-composable'
import {PLAYER_QUERY} from "./queries/queries"

import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      restaurants: [],
      objects: [],
    }
  },
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
  async mounted () {
    try {
      const response = await axios.get('https://yuzugaming-back.herokuapp.com/api/restaurants')
      this.restaurants = response.data.data
    } catch (error) {
      this.error = error;
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
