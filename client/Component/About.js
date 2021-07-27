import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const style = ({
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%'
    // justifyItems: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // width: "100%",
    // paddingRight: 0,
    // paddingLeft: 0.,
    // marginRight: "auto",
    // marginLeft: "auto",
})
function About(props) {

    function head() {
        return (
            <Helmet>
                <title>{`${props.appName} | About`}</title>
                <meta property="og:title" content="About Page" />
            </Helmet>
        )
    }
    return (
        <>
            {head()}

        </>

    )
}

function mapStateToProps(state) {
    return {
        appName: state.common.appName
    };
};

export default { component: connect(mapStateToProps)(About) };