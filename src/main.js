import './assets/main.css'

import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'
import { InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://www.dnd5eapi.co/graphql/2014',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router)

app.mount('#app')
