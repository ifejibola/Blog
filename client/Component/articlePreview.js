import React from 'react'
import { Link } from 'react-router-dom'
function ArticlePreview(props) {

    const article = props.article;

    return (

        <>
            <div className="row justify-content-center gh-1 gv-4 show-on-scroll" data-show-duration="700" data-show-delay="250">
                <div className="col-12 col-lg-10 isotope-grid">
                    <div className="card card-blog card-horizontal card-md isotope-item" data-filters="lifestyle">
                        <Link to="/about" className="card-img">
                            {/* <Link to={`/current/${i}`} className="card-img"> */}
                            <img src="images/services-1920-1080.jpg" alt="" />
                        </Link>
                        <div className="card-body">
                            <Link to="" href="single-post.html" className="card-title h5">{article.title}</Link>
                            <div className="card-date">{new Date(article.createdAt).toDateString()}</div>
                            <p className="card-text">{article.description}</p>
                            <Link to="/about" href="single-post.html" className="btn btn-clean">read more<svg className='icon-arrow icon-arrow-right' width='25' height='10' viewBox='0 0 25 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
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

export default ArticlePreview;