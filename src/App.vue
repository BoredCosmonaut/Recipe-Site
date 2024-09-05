<template>
  <navbar />
  <router-view/>
</template>

<script setup>
  import navbar from "./components/siteNavbar.vue";
  import { RouterView } from 'vue-router';
</script>

<style>
</style>
