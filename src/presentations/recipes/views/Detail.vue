<template>
  <div class="py-6 px-16">
    <div class="flex justify-between">
      <div class="flex items-center">
        <h1 v-if="state.recipe" class="text-4xl font-semibold text-gray-900">
          {{ state.recipe.recipeName }}
        </h1>
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

    <div v-if="state.recipe" class="flex text-sm my-10">
      <div class="w-32">
        <p class=" opacity-50">Category</p>
        <p>{{ state.recipe.categoryName }}</p>
      </div>
      <div class="w-32">
        <p class=" opacity-50">Vegetarion</p>
        <p>{{ state.recipe.vegetarian }}</p>
      </div>
      <div class="w-32">
        <p class=" opacity-50">Time</p>
        <p>{{ state.recipe.totalSecondsToPrepare }}m</p>
      </div>
    </div>

    <p v-if="state.recipe" class="mt-4">
      {{ state.recipe.recipeDescription }}
    </p>

    <button class="mt-4 text-orange-600">
      Share this
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { get } from '@/utils/api';
import { reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      recipe: null,
    });
    return {
      state,
    };
  },

  async created() {
    const id = this.$route.params.id;
    this.getRecipe(id.toString());
  },

  watch: {
    $route(to, from) {
      this.getRecipe(to.params.id);
    },
  },

  methods: {
    async getRecipe(id: string) {
      const data = await get(`Recipes/${id}`);
      // this.state.recipe = data.find((recipe: any) => recipe.id == id); // Zelf de correcte er uit halen.
      this.state.recipe = data; // Zelf de correcte er uit halen.
    },
  },
});
</script>
