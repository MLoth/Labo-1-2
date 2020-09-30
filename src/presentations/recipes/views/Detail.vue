<template>
  <div class="py-6 px-16">
    <div class="flex justify-between">
      <div class="flex items-center">
        <h1 class="text-4xl font-semibold text-gray-900">Tomato soup</h1>
        <button
          class="opacity-50 hover:opacity-100 ml-3 focus:outline-none text-xs text-orange-800"
        >
          bookmark
          <!-- <bookmark-icon class="stroke-current text-orange-500"></bookmark-icon> -->
        </button>
      </div>

      <div class="flex">
        <router-link
          to="/recipes/add/"
          class="flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md"
        >
          add
        </router-link>

        <router-link
          :to="`/recipes/edit/${814}`"
          class="flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md"
        >
          edit
        </router-link>

        <button
          class="m-0 p-0 flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md text-red-600"
        >
          delete
        </button>
      </div>
    </div>

    <div class="flex text-sm my-10">
      <div class="w-32">
        <p class=" opacity-50">Category</p>
        <p>Soup</p>
      </div>
      <div class="w-32">
        <p class=" opacity-50">Vegetarion</p>
        <p>Yes</p>
      </div>
      <div class="w-32">
        <p class=" opacity-50">Time</p>
        <p>45m</p>
      </div>
    </div>

    <p class="mt-4">
      A delicious tomatosoup 🥫.
    </p>

    <button class="mt-4 text-orange-600">
      Share this
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
