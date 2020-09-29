<template>
  <div class="p-16">
    <h1>Overview</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from '@/utils/api';

export default defineComponent({
  setup() {
    api.get('test');

    return {};
  },
});
</script>
