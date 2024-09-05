<template>
    <nav class="navbar">
        <div class="nav-inside">
            <div class="logo-nav">
                <RouterLink>

                </RouterLink>
            </div>
            <div class="nav-paths">
                <RouterLink
                    to="/"
                    :class="[isActiveLink('/')?'active-nav-item': 'non-active-nav-item']"
                >
                    Home
                </RouterLink>
                <RouterLink
                    to="/recipes"
                    :class="[isActiveLink('/recipes')?'active-nav-item': 'non-active-nav-item']"
                >
                    Recipes
                </RouterLink>
                <RouterLink
                    to="/recipes/add"
                    :class="[isActiveLink('/recipes/add')?'active-nav-item': 'non-active-nav-item']"
                >
                    Add Recipe
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    const route = useRoute();
    const isActiveLink = (routePath) => {
        return route.path === routePath;
    }
</script>

<style scoped>
    .navbar {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: row;
        padding: 1% 0px 1% 0px;
        background-color: #c1121f;
        overflow: hidden;
    }

    .nav-inside {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .nav-paths {
        display: flex;
        flex-direction: row;
        width: 15%;
        margin-left: auto;
        align-content: center;
        justify-content: space-between;
        margin-right: 5%;
    } 

    .active-nav-item {
        padding: 5px;
        width: auto;
        height: auto;
        background-color: #fdf0d5;
        color: black;
        border-radius: 10px;
        font-size: 16px;
        text-decoration: none;
        font-weight: 700;
    }

    .non-active-nav-item {
        border-radius: 5px;
        padding:5px; 
        width: auto;
        height: auto;
        background-color:#c1121f; 
        color: whitesmoke;
        font-size: 16px;
        text-decoration: none;
        font-weight: 700;
    }
</style>