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
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

// const CHARACTERS_QUERY = gql`
//   query Characters {
//     characters {
//       results {
//         id
//         name
//         image
//       }
//     }
//   }
// `

const STANDING_QUERY = gql`
  query LeagueStandings {
    league(slug: "classement-parisienne-fighting-ligue-ggst-road-to-evo-2k23") {
      standings (query: {
        page: 1,
        perPage: 8
      }) {
        pageInfo {
          totalPages
          total
        }
        nodes {
          id
          placement
          entrant {
            id
            name
          }
        }
      }
    }
  }
`;


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
