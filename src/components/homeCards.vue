<template>
    <main>
        <div class="cards">
            <div class="recipes-card">
                <p class="recipe-card-text">Explore our diverse collection of delicious 
                                            recipes, carefully crafted to satisfy every
                                            palate. Whether you're a seasoned 
                                            chef or just starting your culinary 
                                            journey, our recipes offer 
                                            step-by-step instructions, tips, 
                                            and inspiration to create mouthwatering 
                                            dishes for any occasion</p>
                <RouterLink 
                    to="/recipes"
                    class ="recipe-card-button"
                >
                    Browse Recipes
                </RouterLink>
            </div>
            <div class="add-recipe-card">
                <p class="add-recipe-card-text">Share your culinary creations with our vibrant community!
                                                Whether it's a cherished family recipe, a personal twist 
                                                on a classic dish, or an entirely new culinary 
                                                invention, we invite you to contribute your masterpiece</p>
                <RouterLink
                    to="/recipes/add"
                    class="add-recipe-card-button"
                >
                    Add Recipe
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    main {
        width: 100%;
        height: auto;
    }

    .cards {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 2%;
    }

    .recipes-card {
        width: 15%;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #ccd5ae;
        padding: 10px 20px 20px 20px;
        border-radius:20px ;
        margin-right: 5%;
    }

    .recipes-card-text {
        font-weight: 500;
    }

    .recipe-card-button {
        margin-top: 5%;
        padding: 10px 0;
        width: auto;
        height: auto;
        background-color: #90e0ef;
        text-decoration: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: bold;
    }

    .add-recipe-card {
        width: 15%;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #ccd5ae;
        padding: 30px 20px 15px 20px;
        border-radius:20px ;
    }

    .add-recipe-card-button {
        margin-top: 10%;
        padding: 10px 0;
        width: auto;
        height: auto;
        background-color: #90e0ef;
        text-decoration: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: bold;
    }
</style>