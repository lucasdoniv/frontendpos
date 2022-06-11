import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index';
import Login from '../components/Login';
import Register from '../components/Register';
import Admin from '../components/Admin';

Vue.use(VueRouter)



export default new VueRouter({
    routes: [{
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/admin',
        component: Admin 
    },
]
})