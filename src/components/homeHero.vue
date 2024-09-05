<template>
    <main>
        <div class="hero-inside">
            <h1 class="hero-title">Welcome to Recipes!</h1>
            <h2 class="hero-desc">Discover our countless easy to replicate recipes</h2>
        </div>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
    }

    .hero-inside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: auto;
        margin-top: 5%;
    }

    .hero-title {
        font-size: 50px;
        font-weight: bolder;
    }

    .hero-desc {
        font-size: 25px;
        font-weight: 500;
    }
</style>