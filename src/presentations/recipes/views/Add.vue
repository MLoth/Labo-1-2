<template>
  <div class=" p-16">
    <input
      v-model="newRecipe.recipeName"
      class="outline-none text-4xl w-full text-gray-900 hover:text-gray-700"
      type="text"
      placeholder="Name of the dish"
    />

    <label class="block mt-4" for="category">Category</label>
    <span v-if="state.categories">
      <select v-model="newRecipe.categoryName" id="category">
        <option v-for="cat of state.categories" :key="cat.categoryName" :value="cat.categoryName">{{
          cat.categoryName
        }}</option>
      </select>
    </span>

    <label class="block mt-4" for="veggie">Vegetarian</label>
    <input v-model="newRecipe.vegetarian" type="checkbox" id="veggie" />

    <label class="block mt-4" for="time">Time to prepare</label>
    <input v-model="newRecipe.totalSecondsToPrepare" type="number" id="time" />

    <label class="block mt-4" for="description">Description</label>
    <textarea
      v-model="newRecipe.recipeDescription"
      id="description"
      cols="30"
      rows="10"
      placeholder="Tell us more about the dish."
    >
    </textarea>

    <button
      @click="postRecipe"
      class="py-2 px-4 w-20 bg-orange-500 rounded text-white font-medium outline-none"
    >
      Save
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, reactive, onMounted } from 'vue';
import api from '@/utils/api';

export default defineComponent({
  setup() {
    const newRecipe = reactive({
      recipeName: '',
      recipeDescription: 'Test',
      totalSecondsToPrepare: 0,
      vegetarian: false,
      userInfo: 'Martijn',
      categoryName: '',
    });

    const state = reactive({
      categories: null,
    });

    const postRecipe = () => {
      console.log(newRecipe);
      if (
        newRecipe.recipeName &&
        newRecipe.recipeDescription &&
        newRecipe.totalSecondsToPrepare &&
        newRecipe.vegetarian &&
        newRecipe.userInfo &&
        newRecipe.categoryName
      ) {
        newRecipe.totalSecondsToPrepare = +newRecipe.totalSecondsToPrepare;
        const success = api.post('Recipes', newRecipe);
        console.log({ success });
      } else {
        console.log('Data not valid');
      }
    };

    onMounted(async () => {
      const categories = await api.get('Categories');
      state.categories = categories;
    });

    return {
      newRecipe,
      state,
      postRecipe,
    };
  },
});
</script>
