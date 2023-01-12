<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ALL_PAGES, ALL_POSTS } from './utils/queries'
import { watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { useStore } from 'vuex'

const store = useStore()
const allPages = useQuery(ALL_PAGES)
const allPosts = useQuery(ALL_POSTS)

// Set pages in store
watchEffect(() => {
  if (allPages.result.value) {
    const { pages: { nodes } } = allPages.result.value
    store.dispatch('setPages', nodes)
  }
})

// Set posts in store
watchEffect(() => {
  if (allPosts.result.value) {
    const { posts: { nodes } } = allPosts.result.value
    store.dispatch('setPosts', nodes)
  }
})

</script>
