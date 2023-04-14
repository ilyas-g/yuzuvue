<template>
  <main>
    <!-- <div>User {{ $route.params.name }}</div> -->

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
import { useFetch } from '../utils/fetch.js'
import Charts from '../components/Charts.vue'
import {watch} from 'vue'

export default {
  name: 'PlayerView',
  props: {
      idStart: String
  },
  data () {
      return {
          players: [],
          // idStartGG: '',
          // idStartGG: route.params.id
      }
  },
  setup () {
    // const { fetchData, fetchError } = useFetch(`http://localhost:1337/api/players?populate=*&filters[name][$eq]=${this.route.params.name}`)
    const { fetchData, fetchError } = useFetch(`http://localhost:1337/api/players?populate=*&filters[name][$eq]=Ganondeurf`)

    // fetchData.data.map((dat) => console.log(dat.attributes.name))
    
    watch(fetchData, () => {
      console.log(fetchData.value.meta);
    })
//     watch(fetchData, (props) => {
//       /* triggers on deep mutation to state */
      
//       // console.log(this.idStartGG);
      
//       // console.log(fetchData.value.data[0].attributes.idStartGG);
//       fetchData.value.data.map((item) => {
//       props.idStart = '300903d2'
//       console.log(item.attributes.name);
//     })
// })
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
