import App from './App'
import About from './Component/About'
import Home from './Component/Home/index'


export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                ...Home,
                exact: true
            },
            {
                path: '/about',
                ...About
            }
        ]
    }
]