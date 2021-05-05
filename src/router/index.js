import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/Home'
import Carrinho from '../view/Carrinho'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'carrinho',
        path: '/carrinho',
        component: Carrinho
    }
]

const router = new Router({ routes })

export default router