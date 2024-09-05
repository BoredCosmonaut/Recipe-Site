<template>
    <main>
        <h1 class="e-title">404 Not Found</h1>
        <p class="e-desc">This page does not exist</p>
        <RouterLink
            to="/"
            class="go-back"
        >
            Go back
        </RouterLink>
    </main>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .e-title {
        margin-top: 10%;
        font-size: 60px;
        font-weight: bold;
    }

    .e-desc {
        margin-top: 2%;
        font-size: 25px;
    }

    .go-back {
        margin-top: 2%;
        background-color: #b2ff9e;
        padding: 10px 30px 10px 30px;
        border-radius: 10px;
        font-size: 20px;
        text-decoration: none;
        color: #3c1642;
        font-weight: 600;
    }
</style>