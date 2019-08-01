import Main from '../components/Main.vue'
import ChosenShowItem from '../components/ChosenShowItem.vue'
import * as types from '../store/types'
import Login from '../components/Login.vue'
import store from '../store/store'

export const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/show/:name",
        component: ChosenShowItem,
        name: "ChosenShowItem",
        props: true,
        beforeEnter(to, from, next) {
            if (!store.state.auth) {
                next('/login')
            }
            next()
        }
    },
    {
        path: "/login",
        component: Login,
        name: "login"
    }
];