<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterSection from './components/FooterSection.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <RouterView />
  <FooterSection />
</template>
