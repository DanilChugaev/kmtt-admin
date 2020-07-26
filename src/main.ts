// @ts-ignore
import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
// @ts-ignore
import router from './router/index.js';

new Vue({
    el: '#app',
    // @ts-ignore
    router,
    // @ts-ignore
    render: h => h(App),
});
