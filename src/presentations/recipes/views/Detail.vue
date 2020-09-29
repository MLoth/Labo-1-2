<template>
  <div class="py-6 px-16">
    <div class="flex justify-between">
      <div class="flex items-center">
        <h1 class="text-4xl font-semibold text-gray-900">Detail from</h1>
        <button class="opacity-50 hover:opacity-100 ml-3 focus:outline-none">
          <bookmark-icon class="stroke-current text-orange-500"></bookmark-icon>
        </button>
      </div>

      <div v-if="state.recipe" class="flex">
        <router-link
          to="/recipes/add/"
          class="flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md"
        >
          <!-- <plus-icon class="stroke-current"></plus-icon> -->
          add
        </router-link>

        <router-link
          :to="`/recipes/edit/${state.recipe.id}`"
          class="flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md"
        >
          <!-- <edit2-icon class="stroke-current "></edit2-icon> -->
          edit
        </router-link>

        <button
          class="m-0 p-0 flex items-center justify-center opacity-50 rounded-full w-12 h-12 hover:opacity-100 focus:outline-none focus:shadow-md text-red-600"
        >
          <!-- <trash-icon class="stroke-current "></trash-icon> -->
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
        <p>{{ state.recipe.totalSecondsToPrepare / 60 }}m</p>
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
import { defineComponent, onMounted, onUpdated, reactive } from 'vue';
import api from '@/utils/api';

// import { PlusIcon, Edit2Icon, TrashIcon, BookmarkIcon } from 'vue-feather-icons';

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      recipe: null,
    });

    return { state };
  },

  watch: {
    $route(to, from) {
      this.getCurrentRecipe(to.params.id);
    },
  },

  methods: {
    async getCurrentRecipe(id: string) {
      const data = await api.get(`Recipes/${id}`);
      this.state.recipe = data;
    },
  },

  async created() {
    this.getCurrentRecipe(this.$route.params.id.toString());
  },
});
</script>
