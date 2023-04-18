<template>
  <Header />

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <ul>
    <li v-for="value in myObject" :key="value">
      {{ value }}
    </li>
  </ul>
  <p>{{ myObject.title }}</p> -->

<router-view></router-view>

</template>

<script>
{/* <router-view v-slot="{ Component }">
    <!-- *** A REGARDER POUR LES TRANSITIONS ! https://www.youtube.com/watch?v=pG5pwDGc3D4 *** -->
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view> */}

import Header from "./components/Header.vue"

export default {
  name: 'App',
  setup () {
    return {
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  components: {
    Header
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
  background-color: $main-bg-color;
  color: var(--main-color);
  font-family: var(--font-main-family);
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
  max-width: 768px;
  margin: 0 auto;
  will-change: transform, opacity;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
