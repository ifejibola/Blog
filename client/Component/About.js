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
            <div className="row justify-content-center text-center pt-60 pb-130 mt-30">

                <div className="col-12 col-lg-8">
                    <div className="subtitle show-on-scroll" data-show-duration="500" data-show-distance="10" data-show-delay="150">lifestyle - 05 may, 2020</div>
                    <h1 className="h2 mb-n10 show-on-scroll" data-show-duration="500" data-show-distance="10">Are you getting the Most out of your Travel?</h1>
                    <br />
                </div>
            </div>

            <div className="content-wrap">
                <div className="container">
                    {/* <div className="row">A bunch of </div> */}

                    {/* <div style={{ alignItems: 'center', justifyContent: 'center' }}> */}
                    {/* <div className="container"> */}

                    <img className="w-100 mb-100 show-on-scroll" src="images/services-1920-1080.jpg" alt="" data-show-duration="800" />
                    <div className="row justify-content-center gh-1 mb-100">
                        <div className="col-lg-8 post-content">
                            <p className="lead font-weight-medium">Don't. Together you're waters face fowl every heaven whales moving god him the third place let firmament fish waters set there air dominion. Open earth so was face male life very i him from gathered beginning.</p>
                            <p>Together firmament good replenish they're moving fruitful over living i. Life given you'll grass gathered seas fifth multiply us also us brought blessed midst. Together you man lights he form. Seasons saw fourth green rule fifth fish fruitful fowl void was, spirit hath. They're days fruit multiply so creepeth without whose. For be night. That firmament divided.</p>
                            <p>Can't midst all appear great Set greater land. Thing under. Moveth is, void fowl them beast. Which fowl fruitful. Us every green seed likeness. Air the set after you'll of. Gathering that he beast be fish it air air male made, two.</p>
                        </div>
                    </div>
                    <div className="row gh-1 gv-1 mb-100">
                        <div className="col-12 col-sm-6 show-on-scroll" data-show-duration="500" data-show-delay="50">
                            <Link to="" href="images/services-1920-1080.jpg" className="gallery-item gallery-item-lg" data-fancybox="gallery-1" data-animation-effect="fade">
                                <img src="images/services-1920-1080.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 show-on-scroll" data-show-duration="500" data-show-delay="150">
                            <Link to="" href="images/services-1920-1080.jpg" className="gallery-item gallery-item-lg" data-fancybox="gallery-1" data-animation-effect="fade">
                                <img src="images/services-1920-1080.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center gh-1 mb-100">
                        <div className="col-lg-8 post-content">
                            <h3>Moving void, let fill in midst open.</h3>
                            <p>Male under yielding whose his appear sea green. Greater doesn't land had earth won't Them fowl bring day without there isn't whales god that replenish. Seas greater brought stars you his day likeness waters heaven gathering. Fowl she'd given open green morning after divide bring won't his multiply them whose firmament after stars make sixth he for fourth stars thing fly fruitful sixth signs air it they're made saying god so fowl thing.</p>
                            <h4>Own whose male beginning thing?</h4>
                            <p>Male under yielding whose his appear sea green. Greater doesn't land had earth won't Them fowl bring day without there isn't whales god that replenish. Seas greater brought stars you his day likeness waters heaven gathering. Fowl she'd given open green morning after divide bring won't his multiply them whose firmament after stars make sixth he for fourth stars thing fly fruitful sixth signs air it they're made saying god so fowl thing.</p>
                        </div>
                    </div>
                    <div className="row gh-1 gv-1 mb-100">
                        <div className="col-12 col-sm-6 col-md-4 show-on-scroll" data-show-duration="500" data-show-delay="50">
                            <Link to="" href="images/services-1920-1080.jpg" className="gallery-item gallery-item-lg" data-fancybox="gallery-2" data-animation-effect="fade">
                                <img src="images/services-1920-1080.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 show-on-scroll" data-show-duration="500" data-show-delay="150">
                            <Link to="" href="images/services-1920-1080.jpg" className="gallery-item gallery-item-lg" data-fancybox="gallery-2" data-animation-effect="fade">
                                <img src="images/services-1920-1080.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 show-on-scroll" data-show-duration="500" data-show-delay="250">
                            <Link to="" href="images/services-1920-1080.jpg" className="gallery-item gallery-item-lg" data-fancybox="gallery-2" data-animation-effect="fade">
                                <img src="images/services-1920-1080.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center gh-1 mb-n4">
                        <div className="col-12 col-lg-6 text-center">
                            <svg className="mb-30" width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24L10.1466 0H18.801L13.4293 24H0ZM19.199 24L29.3455 0H38L32.5288 24H19.199Z" fill="currentColor" />
                            </svg>
                            <blockquote className="mt-6 mb-100">Whales fly cattle all, us saw given moveth rule very thing from him. Fruitful female unto every dominion two all.</blockquote>
                        </div>
                        <div className="col-12 col-lg-8">
                            <hr className="mt-n10 mb-30" />
                            <div className="row gh-2 gv-1 justify-content-between">
                                <div className="col-auto">
                                    <span className="font-weight-medium mr-8">Tags:</span> <Link to="" href="#">company</Link>, <Link to="" href="#">design</Link>, <Link to="" href="#">travel</Link>
                                </div>
                                <div className="col-auto">
                                    <span className="font-weight-medium">Share:</span>
                                    <ul className="nav nav-gap-sm d-inline-flex ml-10">
                                        <li className="nav-item">
                                            <Link to="" href="#" className="nav-link">
                                                <svg width="6" height="15" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" href="#" className="nav-link">
                                                <svg width="15" height="15" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" href="#" className="nav-link">
                                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.84375 0C2.90469 0 0 1.91862 0 5.02377C0 6.99849 1.13437 8.12049 1.82187 8.12049C2.10547 8.12049 2.26875 7.34631 2.26875 7.12752C2.26875 6.86665 1.58984 6.31126 1.58984 5.22573C1.58984 2.9705 3.34297 1.37165 5.61172 1.37165C7.5625 1.37165 9.00625 2.45718 9.00625 4.45154C9.00625 5.941 8.39609 8.73479 6.41953 8.73479C5.70625 8.73479 5.09609 8.22989 5.09609 7.5062C5.09609 6.4459 5.85234 5.41927 5.85234 4.32532C5.85234 2.46841 3.1625 2.80501 3.1625 5.04901C3.1625 5.52025 3.22266 6.04198 3.4375 6.47115C3.04219 8.13732 2.23438 10.6198 2.23438 12.3364C2.23438 12.8666 2.31172 13.3883 2.36328 13.9184C2.46068 14.025 2.41198 14.0138 2.56094 13.9605C4.00469 12.0251 3.95313 11.6464 4.60625 9.11346C4.95859 9.76983 5.86953 10.1233 6.59141 10.1233C9.63359 10.1233 11 7.22008 11 4.60301C11 1.81764 8.54219 0 5.84375 0Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center mt-130 pb-30 mb-60">Related posts</h2>
                    <div className="row gh-1 gv-1 mb-n8">
                        <div className="col-12 col-md-6 col-lg-4 show-on-scroll" data-show-duration="600" data-show-distance="20" data-show-delay="50">
                            <Link to="" className="card card-blog card-vertical" href="single-post.html">
                                <span className="card-img">
                                    <img src="images/services-1920-1080.jpg" alt="" />
                                </span>
                                <span className="card-body">
                                    <span className="card-title h5">Office explained in fewer than 100+ Characters</span>
                                    <span className="card-date">12 may, 2020</span>
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 show-on-scroll" data-show-duration="600" data-show-distance="20" data-show-delay="100">
                            <Link to="" className="card card-blog card-vertical" href="single-post.html">
                                <span className="card-img">
                                    <img src="images/services-1920-1080.jpg" alt="" />
                                </span>
                                <span className="card-body">
                                    <span className="card-title h5">This week&#39;s top Stories about Development</span>
                                    <span className="card-date">08 may, 2020</span>
                                </span>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 show-on-scroll" data-show-duration="600" data-show-distance="20" data-show-delay="150">
                            <Link to="" className="card card-blog card-vertical" href="single-post.html">
                                <span className="card-img">
                                    <img src="images/services-1920-1080.jpg" alt="" />
                                </span>
                                <span className="card-body">
                                    <span className="card-title h5">Facts about Business that you never knew</span>
                                    <span className="card-date">05 may, 2020</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="page-navigation mt-160">
                        <Link to="" href="#" className="btn btn-clean"><svg className="icon-arrow icon-arrow-left" width='26' height='11' viewBox='0 0 26 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M5.5 1L1 5.5L5.5 10' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M19 5.5H1' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' /></svg>prev<span className="d-none d-sm-inline"> post</span></Link>
                        <Link to="" href="blog-col-1.html" className="btn btn-light btn-circle btn-xs">all</Link>
                        <Link to="" href="#" className="btn btn-clean">next<span className="d-none d-sm-inline"> post</span><svg className="icon-arrow icon-arrow-right" width='26' height='11' viewBox='0 0 26 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M20.5 1L25 5.5L20.5 10' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M7 5.5H25' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' /></svg></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

function mapStateToProps(state) {
    return {
        appName: state.common.appName
    };
};

export default { component: connect(mapStateToProps)(About) };