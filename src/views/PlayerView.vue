<template>
    <main>
        <div>User {{ $route.params.name }}</div>
        <p v-if="error">Something went wrong...</p>
        <p v-if="loading">Loading...</p>
        <div v-else >
            <!-- <h1>{{ result.user.player.gamerTag }}</h1> -->
            <h1>{{ $route.params.name }}</h1>
            <div v-for="character in result.user.player.recentStandings" :key="character.id">
            <p>{{ character.entrant.event.name }} - {{ character.entrant.event.tournament.name }} - {{ character.placement }} place ({{ character.entrant.event.videogame.name }})</p>
            </div>
        </div>

        <!-- <div v-if="error">
            {{ error }}
        </div>
        <ul v-else>
            <li v-for="player in players" :key="player.id">
                {{ player.attributes.name }}
            </li>
        </ul> -->

        <div v-if="fetchError">Oops! Error encountered: {{ fetchError.message }}</div>
  <div v-else-if="fetchData">
    <ul v-for="data in fetchData.data" :key="data.id">
      <li>{{ data.attributes.name }}</li>
      <li>{{ data.attributes.idStartGG }}</li>
    </ul>
    <!-- Data loaded:
    <pre>{{ fetchData.data }}</pre> -->
  </div>
  <div v-else>Loading...</div>
    </main>
</template>

<script>

/* ----------------------------------------------------
-------------------------------------------------------
-------------------------------------------------------

Voir le site marvel fait en react pour peut-être réussir à afficher le player en fonction des bons params, comme les personnages de comics de marvel

-------------------------------------------------------
-------------------------------------------------------
---------------------------------------------------- */

import { useQuery } from '@vue/apollo-composable'
import {PLAYER_QUERY} from "../queries/queries"
import { watch, ref } from 'vue'
// import axios from 'axios'
import { useFetch } from '../utils/fetch.js'

export default {
  name: 'PlayerView',
  data () {
      return {
          players: [],
          idStartGG: '300903d2',
          // idStartGG: route.params.id
      }
  },
  setup () {
    const count = ref(0)
    const { result, loading, error, slug } = useQuery(PLAYER_QUERY);
    // const resultSlug = result.value.user.slug
    // const slugSplit = resultSlug.split('/')
    // const slugID = slugSplit[1]
    watch(() => {
    console.log(result.value)
    // console.log(slugID)
    console.log("count ref" + count.value) // 0
    })

    const { fetchData, fetchError } = useFetch(`http://localhost:1337/api/players?populate=*&filters[idStartGG][$eq]=d5ce37b2`)

    return {
      result,
      loading, 
      slug,
      error,
      fetchData,
      fetchError,
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  // async mounted () {
  //   this.idStartGG = this.slug
  //   // console.log("SLUUUUG" + this.slug);
  //   try {
  //     // const response = await axios.get(`http://localhost:1337/api/players?populate=*&filters[idStartGG][$eq]=${this.idStartGG}`)
  //     const response = await axios.get(`http://localhost:1337/api/players?populate=*&filters[idStartGG][$eq]=d5ce37b2`)
  //       // this.idStartGG = 'd5ce37b2'
  //     this.players = response.data.data

  //     // console.log(this.players)
  //   } catch (error) {
  //     this.error = error;
  //   }
  // },
}
</script>
