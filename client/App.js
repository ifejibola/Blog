import React from 'react'
import { renderRoutes } from 'react-router-config'

//
import MenuNav from './Component/MenuNav'
import Footer from './Component/Footer'


function App({ route }) {

    // console.log('APP({props}): ', route);
    return (
        <>
            {/* <div className="container"> */}
            <MenuNav />
            {renderRoutes(route.routes)}
            <Footer />
            {/* </div> */}
        </>
    )
}

export default {
    component: App,
};
