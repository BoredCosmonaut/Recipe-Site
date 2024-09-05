<template>
    <main>
        <section class="recipe-info-container">
            <div class="recipe-info-text">
                <h1 class="recipe-title">Name: {{ recipe.Name }}</h1>
                <p class="recipe-desc">Description: {{ recipe.Description }}</p>
                <p class="recipe-author">Author: {{ recipe.Author }}</p>
                <div class="long-text">
                <h2 class="ingredient-title">Ingredients;</h2>
                <div class="recip-ing" v-for="(ingredient,index) in recipe.Ingredients" :key="index">
                    <p class="ing-index">{{ index + 1 }}:</p>
                    <p class="ing">{{ ingredient }}</p>
                </div>
                <h2 class="recipe-method-title">Methods;</h2>
                <div class="recipe-method" v-for="(method,index) in recipe.Method" :key="index">
                    <p class="method-index">{{ index + 1}}:</p>
                    <p class="method">{{ method }}</p>
                </div>
                </div>
            </div>
        </section>
        <section class="recipe-buttons">
            <button class="delete" @click="deleteRecipe">Delete Recipe</button>
            <RouterLink
                :to="`/recipes/edit/${recipe._id}`"
                class="edit-button"
            >
                Edit Recipe
            </RouterLink>
        </section>
    </main>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import { useRoute, useRouter,RouterLink} from 'vue-router';

    const router = useRouter();
    const route = useRoute();
    const recipeId = route.params.id;
    const recipe = ref({});

    const deleteRecipe = async() => {
        try{
            const confirm = window.confirm("Do you wish to remove this recipe?");
            if(confirm) {
            await axios.delete(`http://localhost:3000/api/recipes/${recipeId}`);
            console.log('Attempting to navigate to /recipes');
            router.push('/recipes');
            }
        } catch (error) {
            console.log("Error deleting:", error);
        }
    }

    onMounted(async () => {
        const response = await axios.get(`http://localhost:3000/api/recipes/${recipeId}`);
        recipe.value = response.data;
    })
</script>

<style scoped>
    template {
        background-color: #fdf0d5;
        overflow: hidden;
    }
    main {
        background-color: #fdf0d5;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .recipe-info-container {
        width: 75%;
        padding: 10px;
        margin: 10px 0px 0px 10px;
        background-color: #ffe5d9;
        border-radius: 10px;
    }

    .recipe-desc {
        font-size: 18px;
        margin-top: 1%;
        font-weight: 800;
        margin-top: 1%;
    }

    .recipe-title {
        font-size: 40px;
        font-weight: bold;
    }

    .recipe-author {
        margin-top: 1%;
        font-size: 15px;
        font-weight: 600;
    }

    .ingredient-title {
        margin-top: 1%
    }

    .recip-ing {
        width: 50%;
        display: flex;
        flex-direction: row;
        margin-top: 1%;
    }

    .ing {
        margin-left: 1%;
    }

    .recipe-method-title {
        margin-top: 1%;
    }

    .recipe-method {
        width: 95%;
        display: flex;
        flex-direction: row;
        margin-top: 1%;
    }

    .method {
        margin-left: 1%;
    }

    .recipe-buttons {
        width: 25%;
        display: flex;
        flex-direction: column;
        margin-top: 1%;
        align-content: center;
        align-items: center;
    }

    .delete {
        background-color: #d90429;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        color: white;
    }

    .delete:hover {
        cursor: pointer;
    }

    .edit-button {
        margin-top: 2%;
        background-color: #38b000;
        padding: 10px 35px 10px 35px;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        text-decoration: none;
        color: white;
    }
</style>