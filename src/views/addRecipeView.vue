<template>
    <main>
        <form @submit.prevent="submitRecipe" class="form">
            <div class="name-input-container input-container">
                <input type="text" id="name-input" class="name-input input" placeholder="Recipe Name" v-model="Name" required>
            </div>
            <div class="desc-input-container input-container">
                <input type="text" id="desc-input" class="desc-input input" placeholder="Description" v-model="Description" required>
            </div>
            <div class="author-input-container input-container">
                <input type="text" id="author-input" class="author-input input" placeholder="Author" v-model="Author" required>
            </div>
            <div class="ing-input-container input-container">
                <div class="row"> 
                <div v-for="(ingredient,index) in Ingredients" :key="index" class="row-inside">
                    <input type="text" v-model="Ingredients[index]" required  class="ing-input input" placeholder="Ingredient"/>
                    <p @click="removeIngredient(index)" class="remove">-</p>
                </div>
                </div>
                <p @click="addIngredient" class="add">+</p>
            </div>

            <div class="method-input-container input-container">
                <div class=row>
                <div v-for="(step,index) in Method" :key="index" class="row-inside">
                    <input type="text" v-model="Method[index]" required class="step-input input" placeholder="Step">
                    <p @click="removeStep(index)" class="remove">-</p>
                </div>
                </div>
                <p @click="addStep" class="add">+</p>
            </div>

            <button type="submit">Submit Recipe</button>
        </form>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import axios  from 'axios';
    const Name = ref("");
    const Description = ref("");
    const Author = ref("");
    const Ingredients = ref([""]);
    const Method = ref([""]);

    const addIngredient = () =>Ingredients.value.push("");
    const removeIngredient = (index) => Ingredients.value.splice(index,1);

    const addStep = () => Method.value.push("");
    const removeStep = (index) => Method.value.splice(index,1);

    const submitRecipe =async () => {
        try {
            const recipeData = {
                Name : Name.value,
                url:"abwa",
                Description : Description.value,
                Author : Author.value,
                Ingredients : Ingredients.value,
                Method: Method.value
            } ;
            await axios.post("http://localhost:3000/api/recipes/add", recipeData)

            Name.value = "";
            Description.value ="";
            Author.value = "";
            Ingredients.value =[""];
            Method.value = [""];

        } catch(error) {
            console.log("Error:",error)
        }
    }
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