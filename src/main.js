import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './plugins/apolloClient'
import App from './App.vue'
import store from './store'
import router from './router'
import './style.css'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(store)
app.use(router)

app.mount('#app')


