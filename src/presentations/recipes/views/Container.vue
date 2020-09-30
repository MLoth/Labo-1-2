<template>
  <div class="flex w-full">
    <div class="h-screen overflow-y-auto w-1/4 bg-orange-100">
      <header class="px-6 py-8">
        <div class="flex items-baseline justify-between">
          <h1 class="text-3xl font-semibold">Gerechten</h1>

          <router-link
            to="/recipes/add"
            class="flex items-center justify-center w-12 h-12 rounded-full hover:shadow-md"
          >
            add
          </router-link>
        </div>
        <input
          type="search"
          placeholder="Zoeken..."
          class="w-full rounded-md px-3 py-2 mt-2 outline-none focus:boxShadow-outline"
        />
      </header>

      <div>
        <div v-if="!state.recipes" class="px-6">
          <p>No recipes</p>
        </div>
        <div v-else>
          <router-link
            v-for="recipe of state.recipes"
            :key="recipe.recipeName"
            :to="`/recipes/detail/${recipe.id}`"
            class="flex items-center justify-between border-b border-gray-200 py-3 px-6 hover:bg-orange-200"
          >
            <div>
              <h3 class="font-semibold ">{{ recipe.recipeName }}</h3>
              <p class="opacity-75">{{ recipe.recipeDescription }}</p>
            </div>
            <div>
              <p class="text-right text-xs">Takes</p>
              <p class="text-gray-600 text-right text-xs">
                {{ recipe.totalSecondsToPrepare / 60 }}m
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="w-3/4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { get } from '@/utils/api';

export default defineComponent({
  setup() {
    // WERKT MSS NIET.
    const state = reactive({
      recipes: null,
    });

    return {
      state,
    };
  },

  async created() {
    const data = await get('Recipes');

    this.state.recipes = data;
  },
});
</script>
