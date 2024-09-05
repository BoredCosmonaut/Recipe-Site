import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import RecipeView from '../views/recipesView.vue'
import addRecipeView from '../views/addRecipeView.vue'
import singleRecipeView from '../views/recipeView.vue'
import editRecipeView from '../views/editRecipeView.vue'
import notFound from '../views/notFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/recipes',
    name:'recipes',
    component:RecipeView
  },
  {
    path:'/recipes/:id',
    name:"recipe",
    component: singleRecipeView
  },
  {
    path:'/recipes/add',
    name:'addRecipe',
    component:addRecipeView,
  },
  {
    path:'/recipes/edit/:id',
    name:'editRecipe',
    component:editRecipeView
  },
  {
    path:'/:catchAll(.*)',
    name:'not-found',
    component:notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
