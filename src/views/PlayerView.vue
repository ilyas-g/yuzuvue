<template>
  <main>
    <div>User {{ $route.params.name }}</div>

    <div v-if="fetchError">Oops! Error encountered: {{ fetchError.message }}</div>
    <div v-else-if="fetchData">
      <pre>{{ fetchData }}</pre>
      <ul v-for="data in fetchData.data" :key="data.id">
        <li>{{ data.attributes.name }}</li>
        <li>{{ data.attributes.idStartGG }}</li>
      </ul>
    </div>
    <div v-else>Loading...</div>

    <Charts player-slug="300903d2" />
  </main>
</template>

<script>
import { useFetch } from '../utils/fetch.js'
import Charts from '../components/Charts.vue'
export default {
  name: 'PlayerView',
  props: {
      idStart: String
  },
  data () {
      return {
          players: [],
          // idStartGG: '300903d2',
          // idStartGG: route.params.id
      }
  },
  setup () {
    const { fetchData, fetchError } = useFetch(`http://localhost:1337/api/players?populate=*&filters[idStartGG][$eq]=d5ce37b2`)

    console.log(fetchData);
    // fetchData.data.map((dat) => console.log(dat.attributes.name))
    return {
      fetchData,
      fetchError,
    }
  },
  components: {
    Charts
  }
}
</script>
