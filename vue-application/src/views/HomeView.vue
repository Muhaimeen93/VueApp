<script setup>
import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";
import { ref, watch } from "vue";

let food = useStorage("food");

// let food = ref(localStorage.getItem('food'));
// let age = ref(localStorage.getItem('age'));

// watch(food, (val) => {
//   write('food',val);
// });

// watch(age, (val) => {
//   write('age',val);
// });

// let {flash} = useFlash();

// function write(key,val) {
//   localStorage.setItem(key,val);
// }

// setTimeout(() => {
//   food.value='changed';
//   age.value='changed';
// },2000);
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>

    <p>What is your favorite food? <input type="text" v-model="food" /></p>
    <p>How old are you? <input type="text" v-model="age" /></p>
    <button @click="flash('Test', 'It woeks')">click me</button>
  </main>
</template>
