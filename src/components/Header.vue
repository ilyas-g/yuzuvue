<template>
    <header>
        <img class="logo" :src="myLogoSrc" alt="my-logo"  width="50" />

        <!-- <myLogoSrc /> -->
        <div class="menu-bg" :class="{ fs: isActive }"></div>
        <div class="menu-burger" :class="{ fs: isActive }" @click="isActive = !isActive">
          <span v-if="!isActive">☰</span>
          <span v-else>✕</span>
        </div>
        <nav class="menu-items" :class="{fs: isActive }">
            <router-link to="/">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
            <router-link to="/team">Go to Team</router-link>
        </nav>

        
      </header>
      <p :class="{ active: isActive }">Element active</p>
      <p v-if="isActive">ok !</p>
      <p v-else>not ok!</p>
</template>

<script>
import { ref } from 'vue'
import myLogoSrc from "@/assets/yuzu_logo.png";
// import myLogoSrc from "@/assets/yuzu_logo.svg";
export default {
  name: 'HeaderComponent',

  setup() {
    const isActive = ref(false)

    return {
        myLogoSrc,
        isActive,
    };
  }
}
</script>

<style lang="scss">
header {
    padding: 15px;
    position: relative;
    // background-color: aqua;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.active {
  background-color: dodgerblue;
}
nav a {
  margin: 0 0.5rem;
  display: block;
  color: var(--sub-color);
}

nav a:hover,
nav a.router-link-exact-active {
  color: var(--ter-color);
  text-decoration: underline;
}

.header-menu {
  display: flex;
  @media screen and (max-width: 992px) {
    display: none;
}
}

.menu {
  position: absolute;
  width: 50px;
  height: 50px;
  font-size: 30px;
  text-align:center;
  border-radius: 100%;
  right:25px;
  top:25px;
}
.menu-bg {
  @extend .menu;
  background: #663399;
  pointer-events: none;
  transition: .5s;
  right:50px;
  top:50px;
  transform:translate3d(50%,-50%,0); 
  transform-origin: center center;
  z-index: 1;
  &.fs{
    transform:translate3d(50%,-50%,0);
    width:1000vw;
    height: 1000vw;
    // width:300vw;
    // height:300vw;
  }
}
.menu-burger {
  @extend .menu;
  color: white;
  padding-top: 11px;
  -webkit-user-select: none;
  cursor: pointer;
  transition: .4s;
  transform-origin: center;
  z-index: 1;
  &.fs {
    transform: rotate(-180deg) translateY(10px);
  }
}
.menu-items{
  position:absolute;
  top: 55px;
  z-index: 1;
  font-weight: bold;
  font-size: 40px;
  letter-spacing:10px;
  color: white;
  width: 100%;
  text-align: center;
  opacity:0;
  transition: .4s;
  // margin-top:100px;
  transform: translateY(-200%);
  pointer-events:none;
  a {
    transition: 0.2s;
    opacity: 0;
    margin-top: 0px;
  }
  &.fs {
    transform: translateY(0);
    pointer-events:auto;
    opacity: 1;
    a{
      opacity: 1;
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 992px) {
    opacity: 1;
    transition: none;
    transform: none;
    display: flex;
    justify-content: space-around;
    font-size: initial;
    a {
      opacity: 1;
    }
  }
}

@media screen and (min-width: 992px) {
  .menu, .menu-bg, .menu-burger {
        display: none;
    }
}
</style>
