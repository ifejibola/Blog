import React from 'react';


const NotFoundPage = ({ staticContext = {} }) => {
    console.log('staticContext: ', staticContext)
    staticContext.notFound = true;

    return <h1>Nopeeee, can't go there...</h1>;
};

export default {
    component: NotFoundPage
};