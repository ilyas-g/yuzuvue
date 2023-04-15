<template>
  <main>
    <div>User {{ $route.params.name }}</div>

    <div v-if="fetchError">Oops! Error encountered: {{ fetchError.message }}</div>
    <div v-else-if="fetchData">
      <!-- <pre>{{ fetchData }}</pre> -->
      <div v-for="data in fetchData.data" :key="data.id">
        <p>{{ data.attributes.name }}</p>
        <p>{{ data.attributes.idStartGG }}</p>
        <Charts :player-slug="data.attributes.idStartGG" />
        <!-- <Charts player-slug="300903d2" /> -->
      </div>
    </div>
    <div v-else>Loading...</div>
  </main>
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

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
      }
  },
  setup () {
    // const router = useRouter()
    const route = useRoute()
    const { fetchData, fetchError } = useFetch(`http://localhost:1337/api/players?populate=*&filters[name][$eq]=${route.params.name}`)

    watch(fetchData, () => {
      console.log(route.params.name);
    })

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
