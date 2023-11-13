import { createApp, provide, h } from 'vue';
import { createPinia } from 'pinia';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

import "./assets/reset.css";

import App from './App.vue';
import router from './router';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'https://api.start.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
    const token = process.env.VUE_APP_TOKEN;

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    };
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

const pinia = createPinia();

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },

    render: () => h(App),
});
app.use(PerfectScrollbar, {
    // watchOptions: true,
    options: {
        suppressScrollX: true
    }
});
app.use(pinia);
app.use(router).mount('#app');
