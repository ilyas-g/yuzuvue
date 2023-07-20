<script setup>
// import axios from 'axios'
import lgoo from "@/assets/yuzu_logoo.svg";
import { ref, watchEffect } from 'vue'

  const home = ref(null)

  const API_URL = 'https://yuzugaming-back.herokuapp.com/api/homepage?locale='
  const locales = ['en', 'fr']

  const currentLocale = ref(locales[0])
  const datas = ref(null)

  watchEffect(async () => {
    const url = `${API_URL}${currentLocale.value}`
    datas.value = await (await fetch(url)).json()

    console.log(datas.value.data.attributes.text)
  })

  // onMounted(async () => {
  //   try {
  //     const response = await axios.get('https://yuzugaming-back.herokuapp.com/api/homepage')
  //     // restaurants.value = response.data.data
  //     home.value = response.data.data
  //     console.log(home.value.attributes.title);
  //   } catch (error) {
  //     this.error = error;
  //   }
  // })

</script>

<template>
  <main class="homepage">
    <div>

      <template v-for="locale in locales" :key="locale.id">
        <input type="radio"
          :id="locale"
          :value="locale"
          name="locale"
          v-model="currentLocale">
        <label :for="locale">{{ locale }}</label>
      </template>

    <p>vuejs/vue@{{ currentLocale }}</p>

    <p>{{ datas.data?.attributes.text }}</p>
    <ul>
      <li v-for="{ id } in datas" :key="id">
        {{ id }} 
      </li>
    </ul>


      <h1><span class="d-block yellow">Yuzu</span>Gaming</h1>
      <p>{{ home?.attributes.text }}</p>
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
