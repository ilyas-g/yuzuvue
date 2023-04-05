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

/* ----------------------------------------------------
-------------------------------------------------------
-------------------------------------------------------

Voir le site marvel fait en react pour peut-être réussir à afficher le player en fonction des bons params, comme les personnages de comics de marvel

-------------------------------------------------------
-------------------------------------------------------
---------------------------------------------------- */

import { useQuery } from '@vue/apollo-composable'
import {PLAYER_QUERY} from "../queries/queries"
import axios from 'axios'

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
    const { result, loading, error, slug } = useQuery(PLAYER_QUERY);
    return {
      result,
      loading, 
      slug,
      error,
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  async mounted () {
    this.idStartGG = this.slug
    console.log("SLUUUUG" + this.slug);
    try {
      // const response = await axios.get(`http://localhost:1337/api/players?populate=*&filters[idStartGG][$eq]=${this.idStartGG}`)
      const response = await axios.get(`http://localhost:1337/api/players?populate=*&filters[idStartGG][$eq]=d5ce37b2`)
        // this.idStartGG = 'd5ce37b2'
      this.players = response.data.data
    console.log("SLUAAAAAAAAAAAAAUUUG" + this.idStartGG);

      console.log(this.players)
    } catch (error) {
      this.error = error;
    }
  },
}
</script>
