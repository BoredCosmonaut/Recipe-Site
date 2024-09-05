<template>
    <main>
        <div class="recipe-part">
        <div class="recipes-inside">
            <div class="recipe-listings-container">
                <recipeListing v-for="recipe in recipes.slice(0,props.limit || recipes.length)" :key="recipe._id" :recipe="recipe" class="recipe-card"/>
            </div>
        </div>
        </div>
        <div v-if="showButton" class="browse-button">
            <RouterLink
                to="/recipes"
                class="recipes-page-button"
            >
            Browse Recipes
            </RouterLink>
        </div>
    </main>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import {defineProps, onMounted,ref} from 'vue';
    import axios from 'axios';
    import recipeListing from "../components/singleRecipe.vue"

    const props = defineProps({
        limit:{
            type:Number
        },
        showButton:{
            type:Boolean,
            default:false
        }
    })
    const recipes = ref([]);

    onMounted(async()=> {
        try{
            const response = await axios.get("http://localhost:3000/api/recipes");
            recipes.value = response.data;
        } catch(error) {
            console.log("error:",error);
        }
    })
</script>

<style scoped>
    main {
        width: 100%;
    }

    .recipe-listings-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }

    .browse-button {
        width: 100%;
        display: flex;
        padding: 0px 0px 30px 0px;
        align-self: center;
        justify-content: center;
    }

    .recipes-page-button {
        position: relative;
        top: 0;
        text-decoration: none;
        padding: 10px 20px 10px 20px;
        margin-top: 3%;
        background-color: #ffcad4;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        transition: 0.45s;
    }

    .recipes-page-button:hover {
        top: -3px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
</style>