<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ALL_PAGES } from './utils/queries'
import { watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { useStore } from 'vuex'

const store = useStore()
const { result } = useQuery(ALL_PAGES)

// Set pages in store
watchEffect(() => {
  if (result.value) {
    const { pages: { nodes } } = result.value
    store.dispatch('setPages', nodes)
  }
})

</script>
