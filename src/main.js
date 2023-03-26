import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import HelloWorldVue from './components/HelloWorld.vue';
import HeaderNavigationVue from './components/HeaderNavigation.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: HelloWorldVue },
    { path: '/about', component: HeaderNavigationVue },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'https://api.start.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = process.env.VUE_APP_TOKEN;
    // return the headers to the context so httpLink can read them
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

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },

    render: () => h(App),
});

app.use(router);

app.mount('#app');
