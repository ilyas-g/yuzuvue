<template lang="">
  <h1 class="green">{{ msg }}</h1>
  <nav>
    <ul>
      <li><slot></slot></li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({ element: String })
</script>
