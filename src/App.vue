<template>
  <Header 
    ch=""
  >
  <select v-model="selected">
    <option :id="locale" v-for="locale in locales" :key="locale.id" :value="locale">{{ locale }}</option>
    <!-- <option disabled value="">Please select one</option> -->
  </select>
  <div>Selected: {{ selected }}</div>
  </Header>
  <router-view></router-view>

  <Footer />
</template>

<script>
{/* <router-view v-slot="{ Component }">
    <!-- *** A REGARDER POUR LES TRANSITIONS ! https://www.youtube.com/watch?v=pG5pwDGc3D4 *** -->
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view> */}

import { ref } from 'vue'

// import axios from 'axios'
import Header from "./components/Header/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  setup () {
    const locales = ['en', 'fr']

    const posts = ref([
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ])

    return {
      locales,
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      posts
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,html {height: 100%; width: 100%; max-width: 100%; overflow-x: hidden;}

body {
  background: #0b0c06;

  color: $main-color;
  font-family: $font-main-family;
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
  // max-width: 768px;
  margin: 0 auto;
  // will-change: transform, opacity;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

.ml-auto, .mx-auto {
    margin-left: auto!important;
}

.mr-auto, .mx-auto {
    margin-right: auto!important;
}
.w-100 {
    width: 100%!important;
}
</style>
