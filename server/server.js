// import 'babel-polyfill'
// import express from 'express'
// import path from 'path'
// import cors from 'cors'
// import proxy from 'express-http-proxy'

// import dotenv from 'dotenv'

// import createStore from './helpers/createStore'
// import renderer from './helpers/renderer';
// import config from '../config/config'
// import assert from 'assert'
// import chai from 'chai/register-expect'

// import createStore from './helpers/createStore'
// import renderer from './helpers/renderer';

// import articlesRoutes from './routes/article.routes'

// import { matchRoutes } from 'react-router-config'
// import MainRouter from '../client/MainRouter'
// dotenv.config();

// //Express 
// const server = express();

// server.use(
//     '/api',
//     proxy('http://blog-deployer.herokuapp.com', {
//         //proxyReqOptDecorator
//         proxyReqOptDecorator(options) {
//             options.headers['x-forwarded-host'] = 'localhost:9090';
//             return options
//         }
//     })
// );
// server.use(express.json());
// // cors
// server.use(cors());

// // server.set('port', process.env.PORT)
// // server.set('port', process.env.PORT || 9090)

// // make folder public
// server.use(express.static('public'))

// server.use((req, res, next) => {
//     // console.log('Axios @0.21.1!!');
//     if (!req.articles) {
//         let s = '';
//         for (let name in req.headers) s += name + ': ' + req.headers[name] + '\n'
//         // console.log(s)
//         console.log('No articles to return ')
//         console.log('ips', req.ip)
//     }
//     if (req.articles)
//         console.log('present!')
//     next()
// });
// const logger = (req, res, next) => {
//     console.log(`${req.method} request for '${req.url}' `);
//     next()
// };

// server.use(logger)

// server.use('/', articlesRoutes)


// server.get('*', (req, res) => {
//     //Redux
//     const store = createStore(req)

//     const promises = matchRoutes(MainRouter, req.path).map(({ route }) => {
//         console.log(route)
//         // console.log(store)
//         return route.loadData ? route.loadData(store) : null;
//     })
//         .map(promise => {
//             if (promise) {
//                 return new Promise((resolve, reject) => {
//                     promise.then(resolve).catch(resolve)
//                 });
//             }
//         });
//     // console.log('promises[matchRoutes]: ', promises)
//     // console.log(req.articles)

//     Promise.all(promises).then(() => {
//         const context = {};
//         const content = renderer(req, store, context);
//         if (context.url) {
//             console.log('context url:', context.url)
//             return res.redirect(301, context.url)
//         }
//         if (context.notFound) {
//             res.status(404);
//         }
//         res.status(200).send(content);

//     });
// });


// // //custom 404 page
// // server.use((req, res) => {
// //     res.send(404, '404 - not found')
// // })

// // //custom 500 page
// // server.use((req, res, next) => {
// //     console.error(err.stack);
// //     res.status(500).send('500 - Server Error!')
// // })
// server.listen(server.get('port'), () => {
//     // console.log(res);
//     var port = server.get('port');
//     console.log(`Article Server Listening on port: ${port} `);
// });

import 'babel-polyfill'
import express from 'express'
import path from 'path'
import cors from 'cors'
import proxy from 'express-http-proxy'

import dotenv from 'dotenv'

// import config from '../config/config'


import createStore from './helpers/createStore'
import renderer from './helpers/renderer';

import articlesRoutes from './routes/article.routes'

import { matchRoutes } from 'react-router-config'
import MainRouter from '../client/MainRouter'
// dotenv.config();

//Express 
const server = express();

server.use(
    '/api',
    proxy('http://blog-deployer.herokuapp.com', {
        // proxy(`http:localhost:${process.env.PORT}`, {
        // proxyReqOptDecorator
        proxyReqOptDecorator(options) {
            options.headers['x-forwarded-host'] = 'localhost:9090';
            return options
        }
    })
);
server.use(express.json());
// cors
server.use(cors());

// server.set('port', process.env.PORT)
server.set('port', process.env.PORT || 9090)

// make folder public
server.use(express.static('public'))

server.use((req, res, next) => {
    // console.log('Axios @0.21.1!!');
    if (!req.articles) {
        let s = '';
        for (let name in req.headers) s += name + ': ' + req.headers[name] + '\n'
        // console.log(s)
        console.log('No articles to return ')
        console.log('ips', req.ip)
    }
    if (req.articles)
        console.log('present!')
    next()
});
const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}' `);
    next()
};

server.use(logger)

server.use('/', articlesRoutes)


server.get('*', (req, res) => {
    //Redux
    const store = createStore(req)

    const promises = matchRoutes(MainRouter, req.path).map(({ route }) => {
        console.log(route)
        // console.log(store)
        return route.loadData ? route.loadData(store) : null;
    })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve)
                });
            }
        });
    // console.log('promises[matchRoutes]: ', promises)
    // console.log(req.articles)

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if (context.url) {
            console.log('context url:', context.url)
            return res.redirect(301, context.url)
        }
        if (context.notFound) {
            res.status(404);
        }
        res.status(200).send(content);

    });
});


// //custom 404 page
// server.use((req, res) => {
//     res.send(404, '404 - not found')
// })

// //custom 500 page
// server.use((req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('500 - Server Error!')
// })
server.listen(server.get('port'), '0.0.0.0', () => {
    // console.log(res);
    var port = server.get('port');
    console.log(`Article Server Listening on port: ${server.get('port')} `);
});