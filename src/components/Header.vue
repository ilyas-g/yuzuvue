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
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/team">Team</router-link>
          </nav>

          <div class="dropdown-lang-wrapper">jp</div>
      </header>
      <!-- <p :class="{ active: isActive }">Element active</p>
      <p v-if="isActive">ok !</p>
      <p v-else>not ok!</p> -->
</template>

<script>
import { ref } from 'vue'
import myLogoSrc from "@/assets/yuzu_logo.png";
import "../theme.css"
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

    margin-top: 5px;
    .logo {
      @media screen and (min-width: 992px) {
        margin-left: 30px;
  }
    }
}

.active {
  background-color: dodgerblue;
}
nav a {
  margin: 0 0.5rem;
  display: block;
  color: var(--sub-color);
  text-decoration: none;
}

nav a:hover,
nav a.router-link-exact-active {
  color: var(--ter-color);
}

.menu {
  position: absolute;
  width: 50px;
  height: 50px;
  font-size: 30px;
  text-align:center;
  border-radius: 100%;
  right:10px;
  // top:25px;
  top: 50%;
  transform: translateY(-40%);
}
.menu-bg {
  @extend .menu;
  background: #663399;
  pointer-events: none;
  transition: .5s;
  right:35px;
  top:50%;
  // transform: translateY(-50%);
  outline: unset;
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
  // background-color: aqua;
  // padding-top: 11px;
  -webkit-user-select: none;
  cursor: pointer;
  transition: .4s;
  transform-origin: center;
  z-index: 1;
  &.fs {
    transform: rotate(-180deg) translateY(29px);
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
}
.menu-items{
  position:absolute;
  top: 55px;
  right: 0;
  z-index: 1;
  font-weight: bold;
  font-size: 40px;
  letter-spacing:10px;
  color: white;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  opacity:0;
  transition: .4s;
  // margin-top:100px;
  transform: translateY(-200%);
  pointer-events:none;
  a {
    transition: 0.2s;
    opacity: 0;
    margin-top: 0px;
    font-weight: 400;
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
    // justify-content: space-around;
    font-size: initial;
    pointer-events: auto;
    letter-spacing: normal;
    position: relative;
    top: unset;
    margin-left: 45px;
    a {
      opacity: 1;
      margin-right: 40px;
    }
  }
}

@media screen and (min-width: 992px) {
  .menu, .menu-bg {
    display: none;
  }
}

.dropdown-lang-wrapper {
  position: relative;
  margin-right: 50px;

  @media (max-width: 980px)
 {
    position: relative;
    margin-right: 70px;
}
}
</style>
