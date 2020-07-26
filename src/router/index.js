import Vue from 'vue';
import Router from 'vue-router';
import Index from '~/pages/Index.vue';
import Hello from '~/pages/Hello.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello,
        },
    ],
});
