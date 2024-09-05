<template>
    <main class="main-card">
        <div class="recipe-card">
            <h2 class="recipe-name">{{ props.recipe.Name }}</h2>
            <p class="recipe-desc">{{ props.recipe.Description }}</p>
            <RouterLink
                :to="'/recipes/' + recipe._id"
                class="recipe-link"
            >
                Check the recipe
            </RouterLink>
        </div>
    </main>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import { defineProps } from 'vue';
    const props = defineProps({
        recipe: {
            type:Object
        }
    })
</script>

<style scoped>
    .main-card {
        width: 23%;
        display: flex;
        flex-direction: row;
        margin-left: 5%;
        margin-top: 5%;
        background-color: #ffe5d9;
        text-align: center;
        padding: 30px 20px 30px 20px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .main-card:nth-child(3n) {
        margin-right: 5%;
    }

    .recipe-name {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 5%;
    }

    .recipe-desc {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 5%;
    }

    .recipe-link {
        position: relative;
        padding: 10px;
        background-color: #d8e2dc;
        border-radius: 10px;
        text-decoration: none;
        color: rgb(247, 120, 120);
        font-weight: 500;
    }

    .recipe-link:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
</style>