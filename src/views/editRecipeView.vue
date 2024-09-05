<template>
    <main>
        <form @submit.prevent="editRecipe" class="form">
            <div class="name-input-container input-container">
                <input type="text" id="name-input" class="name-input input" v-model="recipe.Name" placeholder="Recipe Name" required>
            </div>
            <div class="desc-input-container input-container">
                <input type="text" id="desc-input" class="desc-input input" v-model="recipe.Description" placeholder="Description" required>
            </div>
            <div class="author-input-container input-container">
                <input type="text" id="author-input" class="author-input input" v-model="recipe.Author" placeholder="Author" required>
            </div>
            <div class="ing-input-container input-container">
                <div class="row"> 
                <div v-for="(ingredient, index) in recipe.Ingredients" :key="index" class="row-inside">
                    <input type="text" v-model="recipe.Ingredients[index]" required class="ing-input input" placeholder="Ingredient"/>
                    <p @click="removeIngredient(index)" class="remove">-</p>
                </div>
                </div>
                <p @click="addIngredient" class="add">+</p>
            </div>

            <div class="method-input-container input-container">
                <div class="row">
                <div v-for="(step, index) in recipe.Method" :key="index" class="row-inside">
                    <input type="text" v-model="recipe.Method[index]" required class="step-input input" placeholder="Step">
                    <p @click="removeStep(index)" class="remove">-</p>
                </div>
                </div>
                <p @click="addStep" class="add">+</p>
            </div>

            <button type="submit">Edit Recipe</button>
        </form>
    </main>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import axios from 'axios';

    const recipe = ref({
        Name: "",
        Description: "",
        Author: "",
        Ingredients: [""],
        Method: [""]
    });

    const router = useRouter();
    const route = useRoute();
    const recipeId = route.params.id;

    const addIngredient = () => recipe.value.Ingredients.push("");
    const removeIngredient = (index) => recipe.value.Ingredients.splice(index, 1);

    const addStep = () => recipe.value.Method.push("");
    const removeStep = (index) => recipe.value.Method.splice(index, 1);

    onMounted(async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/recipes/${recipeId}`);
            recipe.value = response.data;
        } catch (error) {
            console.error("Error fetching recipe:", error);
        }
    });

    const editRecipe = async () => {
        try {
            await axios.put(`http://localhost:3000/api/recipes/edit/${recipeId}`, recipe.value);
            router.push(`/recipes/${recipeId}`);
        } catch (error) {
            console.log("Error:", error);
        }
    };
</script>


<style scoped>
    template {
        width: 100%;
        background-color: #fdf0d5;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    main {
        width: 70%;
        background-color: #ffe5d9;
        position: relative;
        padding: 40px;
        top: 20px;
        margin: auto;
        border-radius: 20px;

    }

    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .input-container {
        width: auto;
        display: flex;
        flex-direction: column;
    }

    label {
        margin-right: 3%;
    }

    .row {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .row-inside {
        display: flex;
        flex-direction: row;
        margin-left: 1%;
    }

    .input {
        border: none;
        padding: 10px;
        margin-bottom: 5%;
        width: 300px;
        border-radius: 20px;
    }

    .ing-input {
        width: 320px;
        margin-bottom: 3%;
        margin-left: 4%;
    }

    .step-input {
        width: 320px;
        margin-bottom: 3%;
        margin-left: 4%;
    }

    .remove {
        margin-top: 2.5%;
        margin-left: 2%;
        border: 2px solid black;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .add {
        margin-left: 50%;
        margin-bottom: 3%;
        border: 2px solid black;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button{
        padding: 5px 70px;
        border: none;
        border-radius: 10px;
        background-color: #38b000;
        font-size: 18px;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    button:hover{
        cursor: pointer;
    }
</style>