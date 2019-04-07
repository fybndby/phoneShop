
import Home from '../views/home'
import Classify from '../views/classify'
import Shopcar from '../views/shopcar'
import Mine from '../views/mine'

import Login from '../views/login'
import Register from '../views/register'
import ShopDetails from '../views/shopDetails'
import Author from '../views/author'
import Search from '../views/search'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/classify',
        name: 'classify',
        component: Classify
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: Shopcar,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/shopDetails/:id',
        name: 'shopDetails',
        component: ShopDetails
    },
    {
        path: '/author',
        name: 'author',
        component: Author
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
    
]

export default routes