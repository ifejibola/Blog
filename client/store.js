//Redux config
import axios from 'axios'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const axiosInstance = axios.create({
    baseURL: '/api'
});

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(thunk.withExtraArgument(axiosInstance))
    } else {
        //enable additional
        return applyMiddleware(thunk.withExtraArgument(axiosInstance), createLogger())
    }
}
const store = createStore(reducers, window.INITIAL_STATE, composeWithDevTools(getMiddleware()));
export default store;