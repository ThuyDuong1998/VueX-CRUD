import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Form from './components/Form.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/add', 
        component: Form
    },
    {
        path: '/edit',
        name: 'edit',
        component: Form
    }
]

const router = new VueRouter({routes})
export default router