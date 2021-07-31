import axios from 'axios'
import { FETCH_ALL_ARTICLES } from './types';
export const fetch_Articles_List = () => async (dispatch, getState, api) => {

    // await axios.get('/articles', {
    await api.get('/articles', {
        // proxy: {
        //     // host: `http:localhost:${process.env.PORT}`
        //     // host: 'http://blog-deployer.herokuapp.com'
        //     // port: 9090
        // }
        // proxy: {
        //     host: 'localhost',
        //     port: 9090
        // }
    })
        .then(response => {
            console.log('Server responded with: ', response)
            // console.log('axios: response.payload: ', response.payload)//undefined
            dispatch({
                type: FETCH_ALL_ARTICLES,
                payload: response
            })
        }).catch(errors => {

            console.log('axios catch status: ', errors.response.statusText)
            // console.log('reducer catch error: isAxiosError? ', errors)
        })
    // const res = await api.get('/articles')
    // dispatch({
    //     type: FETCH_ALL_ARTICLES,
    //     payload: res
    // })
};