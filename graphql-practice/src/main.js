import { createApp, h , provide } from 'vue';
import App from './App.vue';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core';

import { ApolloClients } from "@vue/apollo-composable";

const link = createHttpLink({ uri: 'http://localhost:4000/graphql' });
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({ link, cache });

  const app = createApp({
    setup() {
        provide(ApolloClients, {
            default: apolloClient,
          });  
    },
    render: () => h(App),
})

app.mount("#app")
  
