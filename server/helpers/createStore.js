import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../../client/reducers';

export default (req) => {

    const axiosInstance = axios.create({
        // baseUrl: 'http://localhost:9090',
        baseUrl: 'https://blog-deployer.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' },
    });

    const store = createStore(reducer, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

    return store;
};