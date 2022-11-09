import { createWebHistory, createRouter } from "vue-router";
import UserPage from './components/UserPage'
import HomePage from './components/HomePage'
 
const routes = [
    {name:'user', path: '/user' , component: UserPage},
    {name:'home',  path: '/' , component: HomePage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;