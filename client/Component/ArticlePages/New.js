import React from 'react'


function NewPost() {
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
                                <form action="#">
                                    <div className="row gh-1 gv-2">

                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="400">
                                            <input type="text" className="form-control" placeholder="Title" />
                                        </div>
                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="450">
                                            <textarea className="form-control" rows="1" placeholder="Description *"></textarea>
                                        </div>
                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="450">
                                            <textarea className="form-control" rows="1" placeholder="Message *"></textarea>
                                        </div>

                                        <div className="col-12 col-md-6 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="300">
                                            <select className="form-control">
                                                <option value>Category</option>
                                                <option>Technology</option>
                                                <option>Fashion</option>
                                                <option>Entertainment</option>
                                                <option>NatGeo</option>
                                                <option>Animations</option>
                                                <option>Sports</option>
                                            </select>
                                        </div>

                                        <div className="col-12 show-on-scroll" data-show-duration="400" data-show-distance="10" data-show-delay="470">
                                            <button className="btn btn-dark btn-with-ball mt-20" type="button" name="button">submit</button>
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

export default { component: NewPost };