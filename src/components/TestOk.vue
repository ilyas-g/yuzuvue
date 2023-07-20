<template>
    <p>dde {{ A0 }}</p>
    <button @click="update()">
      sss
    </button>
    <p>gggthy {{ A2 }}</p>
</template>

<script>

export default {
  name: 'TestOk',
  setup () {
    let A0 = 1
    let A1 = 2
    let A2 = 0;

    console.log(A2) // 3

    A0 = 2
    console.log(A2) // Still 3

    function update() {
      A2 = A0 + A1
      console.log(A2)
    }

    return {
        A0,
        A2,
        update
    }
  }
}
</script>
