<template>
  <Header />
  <div
    v-if="pages[0] && pages[0].welcome_page"
    class="px-4"
  >
    <img
      class="w-4/5 object-contain mx-auto pt-4"
      :src="pages[0].welcome_page.image.sourceUrl"
      alt="johnny"
    />
    <p class="font-nunito px-7 lg:px-12 text-justify lg:text-center py-4 text-xs lg:text-base">
      {{ pages[0] && pages[0].welcome_page.text }}
    </p>
    <Footer />
  </div>
  <div v-else class="w-full h-screen flex items-center justify-center">
    <FlowerSpinner :animation-duration="5000" :size="160" color="black"/>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { FlowerSpinner } from 'epic-spinners'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const pages = computed(() => store.state.pages)
</script>
