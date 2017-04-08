import Vue from 'vue'
import VueRouter from 'vue-router'
import Materials from "vue-materials"

import Home from './components/Home.vue'

Vue.use(VueRouter);
Vue.use(Materials)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/',
            component: Home,
        },
        { path: '*', redirect: '/' },
    ]
});

export default router