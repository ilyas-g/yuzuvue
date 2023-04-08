<template>
    <main>
        <h1>About</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ad!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem dolorum totam ducimus? 
            Dolorum deserunt exercitationem nulla eum, reprehenderit nihil assumenda cupiditate at hic laudantium!
        </p>

        <div>{{ state.count }}</div>
        <button @click="increment">
            {{ state.count }}
        </button>

        <button @click="incrementt">Count is: {{ count }}</button>
    </main>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const state = reactive({ count: 0 })
    const countt = ref(3)

    function increment() {
      state.count++
      console.log(state);
    }
    function incrementt() {
        countt.value++
      console.log(countt);

    }

    onMounted(() => {
        console.log(`The initial count is ${countt.value}.`)
    })
    return {
      state,
      increment,
      incrementt
    }
  }
}
</script>
