<template>
  <div class="lg:flex">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from './presentations/shared/components/Navigation.vue';

export default defineComponent({
  components: {
    Navigation,
  },
});
</script>
