<template>
    <p>HEADEEEEERRR</p>
    <nav>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        <router-link to="/team">Go to Team</router-link>
        <!-- <router-link to="/player">Go to Player</router-link> -->
    </nav>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style>
nav a {
  margin: 0 0.5rem;
  color: var(--sub-color);
}

nav a:hover,
nav a.router-link-exact-active {
  color: var(--ter-color);
  text-decoration: underline;
}
</style>
