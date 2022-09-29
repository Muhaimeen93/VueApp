<script setup>
import { useCounterStore } from "@/stores/CounterStore";

let counter = useCounterStore();
</script>

<template>
  <div class="counter">
    <h1>{{ counter.count }}</h1>

    <button @click="counter.increment()" :disabled="!counter.remaining">
      Increment ({{ counter.remaining }})
    </button>
  </div>
</template>
