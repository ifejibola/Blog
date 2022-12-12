import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function ArticlePreview(props) {

    const article = props.article;
    // console.log('uuid: ', article.post_uuid);
    console.log(article.default_image)

    return (

        <>
            {/* <div className="row justify-content-center gh-1 gv-4 show-on-scroll" data-show-duration="700" data-show-delay="250"> */}
            <div className="row justify-content-center gh-1 gv-4 show-on-scroll" data-show-duration="400" data-show-delay="150">
                <div className="col-12 col-lg-10 isotope-grid">
                    <div className="card card-blog card-horizontal card-md isotope-item" data-filters="lifestyle">
                        <Link to="/about" className="card-img">
                            {/* <Link to={`/current/${i}`} className="card-img"> */}
                            {/* <img src="images/services-1920-1080.jpg" alt="" /> */}
                            <img src={article.default_image} alt="img" />
                            {/* <img src="Uploads/photo-1632285435843-630660211.jpg" alt="img" /> */}
                        </Link>
                        <div className="card-body">
                            <Link to={`/single/${article.post_uuid}`} className="card-title h5">{article.title}</Link>
                            <div className="card-date">{new Date(article.createdAt).toDateString()}</div>
                            <p className="card-text">{article.description}</p>
                            <Link to={`/single/${article.post_uuid}`} className="btn btn-clean">read more<svg className='icon-arrow icon-arrow-right' width='25' height='10' viewBox='0 0 25 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M20 1L24 5L20 9' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' />
                                <path d='M7 5L24 5' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' /></svg></Link>
                        </div>
                    </div>

                </div>

            </div>
            <br />

        </>

    )
}

export default connect(null)(ArticlePreview);