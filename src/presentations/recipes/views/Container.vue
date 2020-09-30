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
        <div class="px-6">
          <p>No recipes</p>
        </div>
        <div>
          <router-link
            :to="`/recipes/detail/${12}`"
            class="flex items-center justify-between border-b border-gray-200 py-3 px-6 hover:bg-orange-200"
          >
            <div>
              <h3 class="font-semibold ">Soep</h3>
              <p class="opacity-75">Een lekker soepje.</p>
            </div>
            <div>
              <p class="text-right text-xs">Takes</p>
              <p class="text-gray-600 text-right text-xs">
                45m
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
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
