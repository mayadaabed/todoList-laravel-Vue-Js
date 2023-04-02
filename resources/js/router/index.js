import { createRouter, createWebHistory } from "vue-router";

import notFound from '../components/NotFound.vue'
import app from '../components/app.vue'




const routes = [
    {
        path: '/',
        component: app
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router