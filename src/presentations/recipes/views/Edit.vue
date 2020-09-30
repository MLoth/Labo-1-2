<template>
  <div class=" p-16">
    <input
      class="outline-none text-4xl w-full text-gray-900 hover:text-gray-700"
      type="text"
      placeholder="Name of the dish"
    />

    <label class="block mt-4" for="category">Category</label>
    <div>
      <select id="category">
        <option>Categorie</option>
      </select>
    </div>

    <label class="block mt-4" for="veggie">Vegetarian</label>
    <input type="checkbox" id="veggie" />

    <label class="block mt-4" for="time">Time to prepare</label>
    <input type="number" id="time" />

    <label class="block mt-4" for="description">Description</label>
    <textarea
      id="description"
      cols="30"
      rows="10"
      placeholder="Tell us more about the dish."
    >
    </textarea>

    <button
      class="py-2 px-4 w-20 bg-orange-500 rounded text-white font-medium outline-none"
    >
      Save
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
