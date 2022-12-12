import redis from 'redis';
import { promisify } from 'util';


const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})
const GET_ASYNC = promisify(client.get).bind(client)
const SET_ASYNC = promisify(client.set).bind(client)

export {
    GET_ASYNC,
    SET_ASYNC
}