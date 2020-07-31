// @ts-ignore
import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
// @ts-ignore
import router from './router/index.js';
// @ts-ignore
import store from './store/index.ts';

new Vue({
    el: '#app',
    // @ts-ignore
    router,
    store,
    // @ts-ignore
    render: h => h(App),
});
