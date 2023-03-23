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
  <!-- <p v-else v-for="character in result.league.standings.nodes" :key="character.id">
    {{ character.entrant.name }}
  </p> -->

  <div v-else v-for="character in result.user.player.recentStandings" :key="character.id">
    <p>{{ character.entrant.event.name }} - {{ character.entrant.event.tournament.name }} - {{ character.placement }} place</p>
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

    console.log(result);

    // let nodesResult = result

    // console.log(result.user.player.sets.nodes);

    // nodesResult.map((drink) => {
    //   console.log(drink.event);
    // });


    // for (i=0; i <nodesResult.length; i++) {
    //   if (nodesResult[i + 1] === nodesResult[i + 1]) {
    //     console.log("okokok")
    //   } else {
    //     console.log('not ok!');
    //   }
    // }

    // console.log(nodesResult)
    // console.log('okok');

    return {
      result,
      // nodesResult,
      loading, 
      error,
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  mounted() {
    console.log(this.nodesResult)
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
