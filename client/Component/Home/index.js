import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import MainView from './MainView'

import { Helmet } from 'react-helmet'

import { fetch_Articles_List } from '../../actions/articleActions'

function Home(props) {

    useEffect(() => {

        props.fetch_Articles_List()
    }, [])

    function head() {
        return (
            <Helmet>
                <title>{`${props.appName} | Home`}</title>
                <meta property="og:title" content="Home Page" />
            </Helmet>
        )
    }
    function renderList() {
        console.log(props.articles)
        return props.articles.map((article, i) => {
            return <li key={i}>{article.title}</li>
        });
    }

    return (
        <>

            {head()}

            <Header />
            <MainView articles={props.articles} />

        </>
    )
}

function mapStateToProps(state) {
    return {
        appName: state.common.appName,
        articles: state.articlesReducer.articles
    };
}

function loadData(store) {

    console.log('Loading Article Data to the store: access with mapStateToProps...')

    return store.dispatch(fetch_Articles_List())
}
export default {
    loadData: loadData,
    component: connect(mapStateToProps, { fetch_Articles_List })(Home)
};