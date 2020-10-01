<template>
  <div class=" p-16">
    <input
      v-model="recipe.recipeName"
      class="outline-none text-4xl w-full text-gray-900 hover:text-gray-700"
      type="text"
      placeholder="Name of the dish"
    />

    <label class="block mt-4" for="category">Category</label>
    <div v-if="state.categories">
      <select v-model="recipe.categoryName" id="category">
        <option v-for="c of state.categories" :key="c.categoryName">{{
          c.categoryName
        }}</option>
      </select>
    </div>

    <label class="block mt-4" for="veggie">Vegetarian</label>
    <input v-model="recipe.vegetarian" type="checkbox" id="veggie" />

    <label class="block mt-4" for="time">Time to prepare</label>
    <input v-model="recipe.totalSecondsToPrepare" type="number" id="time" />

    <label class="block mt-4" for="description">Description</label>
    <textarea
      v-model="recipe.recipeDescription"
      id="description"
      cols="30"
      rows="10"
      placeholder="Tell us more about the dish."
    >
    </textarea>

    <button
      @click="postRecipe"
      class="block mt-4 py-2 px-4 w-20 bg-orange-500 rounded text-white font-medium outline-none"
    >
      Save
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { get, post } from '@/utils/api';

export default defineComponent({
  setup() {
    // #1 State bijhouden
    // #4 proberen ons ts model te gebruiken
    const recipe: Recipe = reactive({
      recipeName: '',
      recipeDescription: '',
      totalSecondsToPrepare: 0,
      vegetarian: false,
      userInfo: 'Marty',
      categoryName: '',
    });

    // #2 Functie om te posten (via onze api-class)
    const postRecipe = async () => {
      // #3 Korte check of data valid is
      if (
        recipe.recipeName &&
        recipe.recipeDescription &&
        recipe.totalSecondsToPrepare &&
        recipe.vegetarian !== undefined &&
        recipe.vegetarian !== null &&
        recipe.userInfo &&
        recipe.categoryName
      ) {
        recipe.totalSecondsToPrepare = +recipe.totalSecondsToPrepare;
        const response = await post('Recipes', recipe);
        console.log(response);
      } else {
        console.error('An error occured', recipe);
      }
    };

    const state = reactive({ categories: [] });

    const getCategories = async () => {
      const categories = await get('Categories');
      console.log(categories);
      state.categories = categories;
    };

    getCategories();

    return {
      recipe,
      postRecipe,
      state,
    };
  },
});
</script>
