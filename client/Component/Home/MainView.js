import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ArticlePreview from '../articlePreview'
const articleDefault = [{
    title: "A Dog's Life",
    createdAt: new Date(),
    description: "Through Dog and Bone"
}, {
    title: "Cyberpunk 2077 Flop!",
    createdAt: new Date(),
    description: "Flop of the Decade!!"
}, {
    title: "A Dog's Life",
    createdAt: new Date(),
    description: "Through Dog and Bone"
}, {
    title: "Cyberpunk 2077 Flop!",
    createdAt: new Date(),
    description: "Flop of the Decade!!"
}, {
    title: "A Dog's Life",
    createdAt: new Date(),
    description: "Through Dog and Bone"
}, {
    title: "Cyberpunk 2077 Flop!",
    createdAt: new Date(),
    description: "Flop of the Decade!!"
},]

function MainView(props) {
    let { articles } = props;
    console.log('mainview', props.articles)

    return (
        <>
            <div className="container">
                <ul className="nav justify-content-center isotope-options mb-60 pb-30">
                    {/* <li className="nav-item active">
                                <Link to="" href="#" data-filter="all" className="nav-link">
                                    <div className="nav-link-name">all posts</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" href="#" data-filter="lifestyle" className="nav-link">
                                    <div className="nav-link-name">lifestyle</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" href="#" data-filter="design" className="nav-link">
                                    <div className="nav-link-name">design</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" href="#" data-filter="business" className="nav-link">
                                    <div className="nav-link-name">business</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" href="#" data-filter="company" className="nav-link">
                                    <div className="nav-link-name">company</div>
                                </Link>
                            </li> */}
                </ul>
                {/* <li>{articles.title}</li> */}
                {
                    articles.map((article, i) => {
                        // props.articles.map((article, i) => {

                        // console.log('article :', article)
                        return (
                            <ArticlePreview key={i} article={article} />
                        )
                    })
                }
            </div>
        </>
    )
};
// function mapStateToProps(state) {
//     return {
//         articles: state.articlesReducer.articles
//     }
// }
export default (MainView);
// export default connect(mapStateToProps)(MainView);