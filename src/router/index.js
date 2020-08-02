import Vue from 'vue';
import Router from 'vue-router';
import Index from '~/pages/Index.vue';
import AbstractPage from '~/pages/AbstractPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/abstract-page',
            component: AbstractPage,
        },
    ],
});
