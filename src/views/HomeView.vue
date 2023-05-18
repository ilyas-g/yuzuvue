<template>
    <main class="homepage">
      <div>
        <h1><span class="d-block yellow">Yuzu</span>Gaming</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dolores tempore, pariatur quas reiciendis praesentium.</p>
        <p class="text-uppercase yellow">#Yuzurenext</p>
      </div>

      <img :src="lgoo" alt="Yuzu Gaming" width="450" />
      <!-- <div v-if="error">
        {{ error }}
      </div>
      <ul v-else>
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          {{ restaurant.attributes.name }}
        </li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eum provident voluptate. 
          Voluptatum eius consectetur voluptate quis voluptas ipsam, et in distinctio ipsum perspiciatis saepe modi dolorum officiis eum, 
          sint, sapiente est nemo amet cupiditate?
      </p> -->
    </main>
</template>

<script>
import axios from 'axios'
import lgoo from "@/assets/yuzu_logoo.svg";
export default {
  name: 'HomePage',
  data () {
    return {
      restaurants: [],
      objects: [],
    }
  },
    setup () {

    return {
      lgoo,
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  async mounted () {
    try {
      const response = await axios.get('https://yuzugaming-back.herokuapp.com/api/restaurants')
      this.restaurants = response.data.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<style lang="scss">
.homepage {
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
