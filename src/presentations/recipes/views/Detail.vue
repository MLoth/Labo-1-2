<template>
  <div class="py-6 px-16">
    <div class="flex justify-between">
      <div class="flex items-center">
        <h1 class="text-4xl font-semibold text-gray-900">Detail from</h1>
        <button class="opacity-50 hover:opacity-100 ml-3 focus:outline-none">
          <bookmark-icon class="stroke-current text-orange-500"></bookmark-icon>
        </button>
      </div>

      <div class="flex">
        <router-link
          to="/recipes/add/"
          class="flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md"
        >
          <plus-icon class="stroke-current"></plus-icon>
        </router-link>

        <router-link
          :to="`/recipes/edit/${this.id}`"
          class="flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md"
        >
          <edit2-icon class="stroke-current "></edit2-icon>
        </router-link>

        <button
          class="m-0 p-0 flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md"
        >
          <trash-icon class="stroke-current text-red-600"></trash-icon>
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
        <p>20m</p>
      </div>
    </div>

    <p class="mt-4">Delicous soup, etc.</p>

    <button class="mt-4 text-orange-600">
      Share this
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// import { PlusIcon, Edit2Icon, TrashIcon, BookmarkIcon } from 'vue-feather-icons';

export default defineComponent({
  //   components: {
  //     PlusIcon,
  //     Edit2Icon,
  //     TrashIcon,
  //     BookmarkIcon,
  //   },
});
</script>
