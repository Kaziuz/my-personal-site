<template>
  <Header />
  <div class="px-10 py-4 h-screen" v-if="posts.length">
    <div v-for="post in posts" :key="post.url" class="">
      <ul class="list-disc">
        <li>
          <b>Proyecto:</b> {{ post.portafolio.titleWeb }}&nbsp;
          <b>url:</b> <a :href="post.portafolio.url" target="_blank">{{ post.portafolio.url }}</a>&nbsp;
          <b>fecha:</b> {{ post.portafolio.date }}
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="w-full h-screen flex items-center justify-center">
    <FlowerSpinner :animation-duration="5000" :size="160" color="black"/>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { FlowerSpinner } from 'epic-spinners'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const posts = computed(() => store.state.posts)
</script>