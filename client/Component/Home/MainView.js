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
                    {/* <li className="nav-item active"> */}
                    <li className="nav-item">
                        {/* data-filter="all" */}
                        <Link to="new" className="nav-link">
                            <div className="nav-link-name">New Post</div>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                                <Link to="" href="#" data-filter="lifestyle" className="nav-link">
                                    <div className="nav-link-name">lifestyle</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" href="#" data-filter="design" className="nav-link">
                                    <div className="nav-link-name">design</div>
                                </Link>
                            </li> */}

                </ul>
                {
                    articles.map((article, i) => {

                        return (
                            <ArticlePreview key={i} article={article} />
                        )
                    })
                }
            </div>
        </>
    )
};

export default (MainView);
