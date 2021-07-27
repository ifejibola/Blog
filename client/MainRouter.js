import App from './App'
import About from './Component/About'
import Home from './Component/Home/index'

import NewPost from './Component/ArticlePages/New'
import Single from './Component/ArticlePages/SingleArticle'
import ComingSoon from './Component/ComingSoon'

import NotFoundPage from './Component/NotFoundPage'

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                ...ComingSoon,
                exact: true
            },
            {
                path: '/home',
                ...Home,
            },
            {
                path: '/new',
                ...NewPost,
            },
            {
                path: '/single',
                ...Single
            },
            {
                path: '/about',
                ...About
            },
            {
                ...NotFoundPage
            }
        ]
    }
]