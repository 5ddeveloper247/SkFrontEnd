<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import FooterSection from './components/FooterSection.vue';
import Header from './components/Header.vue';
import { useFooterStore } from './stores/FooterLoadingState';

const footerState = useFooterStore();
</script>

<template>
  <Header />
  <RouterView />
  <FooterSection v-if="footerState.footerState" />
</template>
