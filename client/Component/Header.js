import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <>
            <div className="row justify-content-center text-center pt-60 pb-130 mt-30">

                <div className="col-12 col-lg-8">
                    <div className="subtitle show-on-scroll" data-show-duration="500" data-show-distance="10" data-show-delay="150">{new Date().toLocaleString()}</div>
                    <h1 className="h2 mb-n10 show-on-scroll" data-show-duration="500" data-show-distance="10">{props.appName}</h1>
                    <h1 className="h2 mb-n10 show-on-scroll" data-show-duration="500" data-show-distance="10">Jenkins and Heroku Pipeline!!</h1>
                    <br />
                </div>


                {/* <h1 className="mb-4">Blog Article</h1>
                <a href="/articles/new" className="btn btn-success">
                    New Article
                </a> */}

            </div>
            {/* <img className="w-100 mb-100 show-on-scroll" src="images/services-1920-1080.jpg" alt="" data-show-duration="800" /> */}
        </>
    )
};

function mapStateToProps(state) {
    return {
        appName: state.common.appName
    }
}

export default connect(mapStateToProps)(Header);
