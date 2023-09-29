<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  selecto: String,
  ch: Object,
  style: Object
})

const emit = defineEmits(['update-completed'])

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])


const completedInputModel = computed({
  get() {
    return props.todo.completed
  },

  set(newValue) {
    emit('update-completed', newValue)
  },
})
</script>

<template>
    <select v-model="completedInputModel">
  <option v-for="option in options" :key="option.value" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Selected: {{ selecto }}</div>
</template>
