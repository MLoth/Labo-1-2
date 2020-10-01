import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    alias: '/',
    path: '/recipes',
    // name: "Recipes Container",
    component: () =>
      import(
        /* webpackChunkName: 'recipesContainer' */ '../presentations/recipes/views/Container.vue'
      ),

    children: [
      {
        path: '',
        name: 'Overview',
        component: () =>
          import(
            /* webpackChunkName: 'recipeOverview' */ '../presentations/recipes/views/Overview.vue'
          ),
      },

      {
        path: 'add',
        name: 'Add',
        component: () =>
          import(
            /* webpackChunkName: 'recipeAdd' */ '../presentations/recipes/views/Add.vue'
          ),
      },

      {
        path: 'edit/:id', // Dynamische id van een recipe
        name: 'Edit',
        component: () =>
          import(
            /* webpackChunkName: 'recipeEdit' */ '../presentations/recipes/views/Edit.vue'
          ),
      },

      {
        path: 'detail/:id', // Dynamische id van een recipe
        name: 'Detail',
        component: () =>
          import(
            /* webpackChunkName: 'recipeDetail' */ '../presentations/recipes/views/Detail.vue'
          ),
      },
    ],
  },

  {
    path: '/*',
    name: 'NotFound',
    component: () =>
      import(
        /* webpackChunkName: 'NotFound' */ '../presentations/shared/views/NotFound.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change meta data for each route
// router.beforeEach((route) => {
//   console.log({ route });
//   if (route.name == 'Detail') {
//     document.title = 'Dynamic';
//     // document.querySelector('head link[rel="icon"]').href = '';
//   } else {
//     document.title = 'Lol 🙂';
//   }

//   console.log();
// });

export default router;
