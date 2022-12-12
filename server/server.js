import 'babel-polyfill'
import express from 'express'
import path from 'path'
import cors from 'cors'
import proxy from 'express-http-proxy'
import responseTime from 'response-time'

import dotenv from 'dotenv'

import createStore from './helpers/createStore'
import renderer from './helpers/renderer';

import articlesRoutes from './routes/article.routes'

import { matchRoutes } from 'react-router-config'
import MainRouter from '../client/MainRouter'
// import fileUpload from 'express-fileupload'
import { sql } from '../Model/db';

dotenv.config();

//Express 
const server = express();


server.use(
    '/api',
    // proxy('http://blog-deployer.herokuapp.com', {
    proxy(`http://localhost:${process.env.PORT}`, {
        // proxyReqOptDecorator
        proxyReqOptDecorator(options) {
            // options.headers['x-forwarded-host'] = 'localhost:9090';
            return options
        }
    })
);
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb', extended: false }));
// server.use(fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 },
// }));
server.use(responseTime());
// server.use(express.json());
// cors
server.use(cors());

// server.set('port', process.env.PORT)
server.set('port', process.env.PORT || 9090)

console.log('pathhhh', (__dirname, 'public'))
console.log('pathhhh', path.join(__dirname, 'public'))

// make folder public
// server.use(express.static('single'))
server.use('/single', express.static('./'))
server.use(express.static('./'))
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

async function db() {
    const person = await sql`
    SELECT * FROM user_tbl
`;
    const tables = await sql`
    SELECT * FROM user_tbl
        INNER JOIN address
        ON user_tbl.user_uuid = address.add_uuid
    `;

    console.log('db: ', person);
    console.log(tables)
};

server.get('*', (req, res) => {

    // db();
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
server.listen(server.get('port'), () => {
    // console.log(res);
    var port = server.get('port');
    console.log(`Article Server Listening on port: ${port} `);
});
