<script>
// import axios from 'axios'
import lgoo from "@/assets/yuzu_logoo.svg";
import { ref, watchEffect } from 'vue'

import Panel from "../components/Panel/PanelComponent.vue"
import TestOk from "../components/TestOk.vue"

export default {
  name: 'HomeView',
  setup() {
    // const product = ref(null)
    // fetch('http://localhost:1337/api/homepage?locale=en')
    // .then(response => response.json())
    // .then(data => product.value = data);

    const API_URL = `http://localhost:1337/api/homepage?locale=`
    const locales = ['en', 'fr']

    const currentLocale = ref(locales[0])
    const datas = ref(null)

    watchEffect(async () => {
      const url = `${API_URL}${currentLocale.value}`
      try {
          datas.value = await (await fetch(url)).json()
          console.log(datas.value.data.attributes.text)
      } catch (error) {
          console.error('Failed to fetch data:', error)
      }
    })

    return {
      lgoo,
      currentLocale,
      locales,
      datas
    }
  },
  components: {
    Panel,
    TestOk
  }
}


</script>

<template>
  <main class="homepage">
    <div>
      <TestOk>Click me!</TestOk>
      <Panel /> <!-- Attention il y a un display none en sass sur le composant -->

      <template v-for="locale in locales" :key="locale.id">
      <input type="radio"
        :id="locale"
        :value="locale"
        name="locale"
        v-model="currentLocale">
      <label :for="locale">{{ locale }}</label>
    </template>
      <p>vuejs/vue@{{ currentLocale }}</p>

      <p v-if="datas && datas.data">{{ datas.data?.attributes.text }}</p>
      <ul v-if="datas && datas.data">
          <li v-for="{ id } in datas?.data" :key="id">
              {{ id }}
          </li>
      </ul>

      <h1><span class="d-block yellow">Yuzu</span>Gaming</h1>
      <p class="text-uppercase yellow">#Yuzurenext</p>
    </div>

    <img :src="lgoo" alt="Yuzu Gaming" width="450" />
  </main>
</template>

<style lang="scss">
.homepage {
  display: block; /* A ENLEVER APRES L'AJOUT DES LANGUES */
  h1 {
    line-height: 1;
    text-transform: uppercase;
    // text-align: center;
    @media screen and (min-width: $breakpoint-md) {
      font-size: 5em;
    }
    @media screen and (min-width: $breakpoint-lg) {
      font-size: 4em;
    }
  }

  p {
    margin: 1em 0;
  }
  @media screen and (min-width: $breakpoint-lg) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5em;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (min-width: $breakpoint-lg) {
    width: 80%;
  }
}
</style>
