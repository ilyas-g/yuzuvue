<template>
    <main>
        <h1>Home</h1>
            <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.attributes.name }}
      </li>
    </ul>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dolores tempore, pariatur quas reiciendis praesentium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eum provident voluptate. 
            Voluptatum eius consectetur voluptate quis voluptas ipsam, et in distinctio ipsum perspiciatis saepe modi dolorum officiis eum, 
            sint, sapiente est nemo amet cupiditate?
        </p>
    </main>
</template>

<script>
import axios from 'axios'

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
