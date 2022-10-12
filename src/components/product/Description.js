import React from 'react'

const Description = () => {
  return (
    <section className="product-detail-tab pt-100" id="product-review">
        <div className="container">
            <div className="product-review">
                <ul id="tabs" className="review-tab nav nav-tabs" role="tablist">
                    <li role="presentation" className="tab-link">
                        <a href="#description" role="tab" className="active" data-toggle="tab">Description</a>
                    </li>
                    <li role="presentation" className="tab-link">
                        <a href="#review" role="tab" data-toggle="tab">Review</a>
                    </li>
                </ul>
                <div className="product-review-des tab-content">
                    <div role="tabpanel" className="product-review-in product-review-des tab-pane fade active show" id="description">
                        <h2>Nunc lobortis bibendum elementum.</h2>
                        <p>Mauris felis neque, hendrerit id velit a, sollicitudin gravida nunc in velit lectus, varius quis pretium fermentum, faucibus vel ante etiam justo nulla, condimentum sit amet urna eget, rutrum auctor massa suspendisse sit amet odio et dui lobortis iaculis phasellus sagittis interdum neque, fermentum gravida ante maximus sed nunc lobortis bibendum elementum integer rhoncus et libero ut suscipit aliquam non ligula id dui consequat viverra a ut sem pellentesque et sapien eget lorem viverra dignissim.  Mauris felis neque, hendrerit id velit a, sollicitudin gravida nunc in velit lectus, varius quis pretium fermentum, faucibus vel ante etiam justo nulla, condimentum sit amet urna eget, rutrum auctor massa suspendisse sit amet odio et dui lobortis iaculis phasellus sagittis interdum neque, fermentum gravida ante maximus sed nunc lobortis bibendum elementum integer rhoncus et libero ut suscipit aliquam non ligula id dui consequat viverra a ut sem pellentesque et sapien eget lorem viverra dignissim.</p>
                        <ul>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Sweetheart neckline</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Unlined</li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i> Shell: 96% polyester, 4% spandex</li>
                        </ul>
                    </div>
                    <div role="tabpanel" className="product-review-in product-review-com tab-pane fade" id="review">
                        <div className="comment-part">
                            <h3>03 COMMENTS</h3>
                            <ul>
                                <li>
                                    <div className="comment-user">
                                        <img src="images/comment-img1.jpg" alt="comment-img" />
                                    </div>
                                    <div className="comment-detail">
                                        <span className="commenter">
                                            <span>John Doe</span> (05 Jan 2020)
                                        </span>
                                        <p>Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.</p>
                                        <a href="#" className="reply-btn btn btn-color small">Reply</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <div className="comment-user">
                                                <img src="images/comment-img2.jpg" alt="comment-img" />
                                            </div>
                                            <div className="comment-detail">
                                                <span className="commenter">
                                                    <span>John Doe</span> (12 Jan 2020)
                                                </span>
                                                <p>Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.</p>
                                                <a href="#" className="reply-btn btn btn-color small">Reply</a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </li>
                                        <li>
                                            <div className="comment-user">
                                                <img src="images/comment-img3.jpg" alt="comment-img" />
                                            </div>
                                            <div className="comment-detail">
                                                <span className="commenter">
                                                    <span>John Doe</span> (15 Jan 2020)
                                                </span>
                                                <p>Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.</p>
                                                <a href="#" className="reply-btn btn btn-color small">Reply</a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="leave-comment-part pt-100">
                            <h3 className="reviews-head mb-30">Leave A Comment</h3>
                            <form className="main-form">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Message" rows="8"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn post-comm">Post Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Description
