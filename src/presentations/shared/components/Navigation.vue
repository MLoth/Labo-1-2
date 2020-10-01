<template>
  <nav
    class="flex flex-row lg:flex-col justify-between lg:min-h-screen bg-white lg:w-48 w-full"
  >
    <router-link
      to="/"
      class="lg:self-start flex flex-col lg:mx-auto p-4 lg:mt-8 bg-orange-600 text-white leading-none uppercase font-bold rounded-lg shadow"
    >
      <span>Fo</span>
      <span>od</span>
    </router-link>

    <ul class="flex lg:block lg:self-center">
      <li>
        <router-link
          to="/"
          class="flex items-center justify-center w-12 h-12 text-orange-600 text-sm mt-6 hover:underline hover:opacity-75"
        >
          recipes
        </router-link>
      </li>
      <li>
        <router-link
          to="/"
          class="flex items-center justify-center w-12 h-12 text-orange-600 text-sm mt-6 hover:underline hover:opacity-75"
        >
          restaurants
        </router-link>
      </li>
      <li>
        <router-link
          to="/"
          class="flex items-center justify-center w-12 h-12 text-orange-600 text-sm mt-6 hover:underline hover:opacity-75"
        >
          saved
        </router-link>
      </li>
    </ul>

    <div>
      <!-- Something else -->
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
