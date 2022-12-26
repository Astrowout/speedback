<script setup lang="ts">
import { reactive } from "vue";

defineProps<{ msg: string }>()

const state = reactive({
  count: 0,
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="flex flex-col spd-bg-purple-500">
    <button type="button" @click="state.count++">count is {{ state.count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>
