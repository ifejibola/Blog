import React, { useState, Component, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import MainView from './MainView'
import Pagination from '../Pagination'

import { Helmet } from 'react-helmet'

import { fetch_Articles_List } from '../../actions/articleActions'

function Home(props) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);


    useEffect(() => {
        setLoading(true);
        props.fetch_Articles_List()
        setLoading(false);
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstpoST = indexOfLastPost - postsPerPage;
    const currentPosts = props.articles.slice(indexOfFirstpoST, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
            <MainView articles={currentPosts} isLoading={loading} />
            {/* <MainView articles={props.articles} isLoading={loading} /> */}
            <Pagination postsPerPage={postsPerPage} totalPosts={props.articles.length} paginate={paginate} />
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