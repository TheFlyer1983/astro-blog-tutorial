<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  messages: string[];
}>();

const randomMessage = () =>
  props.messages[Math.floor(Math.random() * props.messages.length)];

function setGreeting() {
  greeting.value = randomMessage();
  console.log(greeting.value);
}
const greeting = ref(props.messages[0]);
</script>

<template>
  <div>
    <h3>{{ greeting }}! Thank you for visiting.</h3>
    <button @click="setGreeting" class="border">New Greeting</button>
  </div>
</template>

<style lang="scss" scoped></style>
