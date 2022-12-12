import axios from 'axios'
import FormData from 'form-data';
// import fs from 'fs';

import { FETCH_ALL_ARTICLES, ADD_POST, SINGLE_POST } from './types';

var formData = new FormData();

export const fetch_Articles_List = () => async (dispatch, getState, api) => {

    // await axios.get('/articles', {
    // await api.get('/articles', {
    //     // proxy: {
    //     //     // host: `http:localhost:${process.env.PORT}`
    //     //     // host: 'http://blog-deployer.herokuapp.com'
    //     //     // port: 9090
    //     // }
    //     // proxy: {
    //     //     host: 'localhost',
    //     //     port: 9090
    //     // }
    // })
    //     .then(response => {
    //         console.log('Server responded with: ', response)
    //         // console.log('axios: response.payload: ', response.payload)//undefined
    //         dispatch({
    //             type: FETCH_ALL_ARTICLES,
    //             payload: response
    //         })
    //     }).catch(errors => {

    //         console.log('axios catch status: ', errors.response.statusText)
    //         // console.log('reducer catch error: isAxiosError? ', errors)
    //     })
    const res = await api.get('/articles')
    dispatch({
        type: FETCH_ALL_ARTICLES,
        payload: res
    })
};


export const newPost = (post) => async (dispatch, getState, api) => {

    const config = {
        headers: {
            // 'Content-Type': 'application/json'
            'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data;boundary="boundary"'
        }
    }

    // const { title, description, content, photo } = post;
    // formData.append('title', title)
    // formData.append('description', description)
    // formData.append('content', content)
    // // formData.append('photo', photo, photo.name);
    // formData.append('photo', photo);
    // formData.append('photo', photo_two, photo_two.name);
    // formData.append('photo', photo_three, photo_three.name);

    console.log('newpost actions: ', post);

    const res = await api.post('/new', post)
        .then(res => {
            console.log('add post response : ', res);
        });

    dispatch({
        type: ADD_POST,
        payload: res
    });
};

export const single = (params) => async (dispatch, getState, api) => {

    let config = {
        params: {
            post_uuid: params
        }
    }
    console.log('getState', getState);

    await api.get(`singlepost/${params}`, {
        proxy: {
            host: `http://localhost:`,
            // host: 'http://blog-deployer.herokuapp.com'
            port: 35
        }
        // proxy: {
        //     host: 'localhost',
        //     port: 35
        // }
    })
        // await api.get(`/singlepost/`, config)
        .then(res => {
            console.log('single post', res);

            dispatch({
                type: SINGLE_POST,
                payload: res
            });
        });
};