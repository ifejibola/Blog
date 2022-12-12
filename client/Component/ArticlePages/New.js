import React, { useEffect } from 'react'
import { useState } from 'react';

import { connect } from 'react-redux';
import FormData from 'form-data';

import { newPost } from '../../actions/articleActions'

let userState = {
    title: '',
    description: '',
    content: '',
    photo: '',
};

function NewPost(props) {
    return (
        <>
            <div className="content-wrap">
                <div className="py-160">
                    <div className="container">
                        <div className="row mb-n8">
                            <div className="col-12 col-lg-10 col-xl-8 show-on-scroll" data-show-distance="10" data-show-duration="600">
                                <h1 className="h2 mt-15 pb-4 pb-sm-0 mb-130">New Post 👋</h1>
                            </div>
                        </div>
                        <div className="row gh-1 gv-2 pb-10">

                            <div className="col-12 col-lg-8 mt-5 mt-lg-0">
                                <form action="#" encType="multipart/form-data">
                                    {/* <form action="#" > */}
                                    <div className="row gh-1 gv-2">

                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="400">
                                            <input type="text" className="form-control" placeholder="Title" name="title" value={props.title} onChange={props.onChange} />
                                        </div>
                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="450">
                                            <textarea className="form-control" rows="1" placeholder="Description *" name="description" value={props.description} onChange={props.onChange} ></textarea>
                                        </div>
                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="450">
                                            <textarea className="form-control" rows="1" placeholder="Message *" name="content" value={props.content} onChange={props.onChange} ></textarea>
                                        </div>
                                        {/* Images */}
                                        <div className="col-auto show-on-scroll" data-show-distance="10" data-show-duration="500" data-show-delay="100">
                                            <input className="checkbox-btn" type="file" name="photo" id="checkbox&lt;10000" onChange={props.onChange} value={props.photo} accept='image/*' multiple />
                                            <label htmlFor="checkbox&lt;10000"><span>&lt;Upload</span></label>

                                            <br />
                                            <span className="lead font-weight-medium mb-30">
                                                {props.phot.photo ? props.phot.value : ''}
                                            </span>
                                        </div>

                                        {/* <div className="col-12 col-md-6 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="300">
                                            <select className="form-control">
                                                <option value>Category</option>
                                                <option>Technology</option>
                                                <option>Fashion</option>
                                                <option>Entertainment</option>
                                                <option>NatGeo</option>
                                                <option>Animations</option>
                                                <option>Sports</option>
                                            </select>
                                        </div> */}

                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="470">
                                            <button className="btn btn-dark btn-with-ball mt-20" type="button" name="button" onClick={props.onclick}>submit</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="map" className="gmaps mt-130"></div>

                    </div>
                </div>
            </div>
        </>
    )
};

function handlePost(props) {

    //state
    var [user, setUser] = useState(userState);

    // const handleLogin = name => e => {
    function handleLogin(e) {
        console.log('e: ', e);
        console.log('e: ', e.target.files);
        console.log('e: ', e.target.name);
        let setValues = e.target.type === 'file' ? e.target.files : e.target.value;
        // let setValues = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        let name = e.target.name;
        console.log('setvalues: ', setValues)
        // let setValues = e.target.value;
        // let name = e.target.name;

        setUser({
            ...user,
            [name]: setValues,
        })
        // e.preventDefault();
        // console.log(user); // you cant read state values yet.
    }

    function buttonHandle(e) {
        e.preventDefault();
        // const { title, description, content, photo } = user;
        let formData = new FormData();

        formData.append('title', user.title);
        formData.append('description', user.description);
        formData.append('content', user.content);
        for (const key of Object.keys(user.photo)) {
            formData.append('photo', user.photo[key])
        };

        // console.log('button: ', photo)

        props.newPost(formData)
        // props.newPost(user)
        // console.log('submit button! ', title, user.description, user.content)
    }

    useEffect(() => {


        console.log('user state', user)
        console.log('object', user.photo.name)

    })
    return (
        <>
            <NewPost onChange={handleLogin} onclick={buttonHandle} phot={{ photo: user.photo, value: user.photo.name }} />
            {/* <NewPost onChange={handleLogin} onclick={buttonHandle} /> */}

            {/* {user.photo ? user.photo.name : ''} */}
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        postSubmit: (state) =>
            newPost(state)
    }
};

// export default { component: connect(null, mapDispatchToProps)(handlePost) };
export default { component: connect(null, { newPost })(handlePost) };