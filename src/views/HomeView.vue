<template>
    <div class="top">
        <hero />
        <cards />
        <recipeCards :limit="3" :show-button="true"/>
    </div>
</template>

<script setup>
    import hero from "../components/homeHero.vue"
    import cards from "../components/homeCards.vue"
    import recipeCards from "../components/recipeListings.vue"
</script>

<style scoped>
    .top {
        background-color: #fdf0d5;
        overflow: hidden;
    }
</style>