<script setup lang="ts">
import { reactive } from "vue";

defineProps<{ msg: string }>()

const state = reactive({
  count: 0,
});
</script>

<template>
  <button type="button" @click="state.count++">
    count is {{ state.count }}
  </button>
</template>
