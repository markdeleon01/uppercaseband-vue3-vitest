<script setup>
import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <NavBar />
    <div id="page-header">
      <h1>U P P E R C A S E</h1>
    </div>
    <div id="page-section">
      <RouterView />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
}

#page-header {
  border-bottom: 1px;
  border-bottom-color: grey;
  border-bottom-style: solid;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: royalblue;
}
</style>
