// Layouts 
import DefaultLayout from '../components/Layout/DefaultLayout/index.js'
import HeaderOnly from '../components/Layout/HeaderOnly/index.js'

// Pages
import Home from '../pages/Home/index.js'     
import Following from '../pages/Following/index.js'
import Profile from '../pages/Profile/index.js'
import Upload from '../pages/Upload/index.js'
import Search from '../pages/Search/index.js'

// Public routes that can be accessed without authentication
const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/following',
        component: Following,
        layout: DefaultLayout,
    },
    {
        path: '/profile',
        component: Profile,
        layout: DefaultLayout,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly, 
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    }
]

// Must be logged in to access these routes
const privateRoutes = [

]

export {publicRoutes, privateRoutes}