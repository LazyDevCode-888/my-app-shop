<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <Navbar />
    <router-view />
  </div>
</template>
