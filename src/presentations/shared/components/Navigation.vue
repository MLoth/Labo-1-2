<template>
  <nav class="flex flex-col justify-between min-h-screen bg-white w-48">
    <router-link
      to="/"
      class="self-start flex flex-col mx-auto p-4 mt-8 bg-orange-600 text-white leading-none uppercase font-bold rounded-lg shadow"
    >
      <span>Fo</span>
      <span>od</span>
    </router-link>

    <ul class="self-center">
      <li>
        <router-link
          to="/"
          class="flex items-center justify-center w-12 h-12 rounded-full shadow-md mt-6 hover:opacity-75"
        >
          recipes
          <!-- <square-icon class="block w-6 h-6 stroke-current text-gray-700 stroke-1"></square-icon> -->
        </router-link>
      </li>
      <li>
        <router-link
          to="/"
          class="flex items-center justify-center w-12 h-12 rounded-full shadow-md mt-6 hover:opacity-75"
        >
          restaurants
          <!-- <map-icon class="block w-6 h-6 stroke-current text-gray-700 stroke-1"></map-icon> -->
        </router-link>
      </li>
      <li>
        <router-link
          to="/"
          class="flex items-center justify-center w-12 h-12 rounded-full shadow-md mt-6 hover:opacity-75"
        >
          saved
          <!-- <bookmark-icon class="block w-6 h-6 stroke-current text-gray-700 stroke-1"></bookmark-icon> -->
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
