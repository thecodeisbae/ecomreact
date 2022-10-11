import React from 'react'

const Blog = () => {
  return (
    <div className="row align-flax pr-30">
        <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="latest-blog-img">
                <a href="blog-detail.html" className="display-b">
                    <img src="images/blog-1.jpg" alt="blog" />
                </a>
            </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7">
            <div className="lat-blog-desc">
                <a href="blog-detail.html" className="lat-blog-title text-uppercase">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                <p className="lat-blog-date text-uppercase"><span>john doe</span> - APRIL 18, 2015 AT 5.00 PM</p>
                <p className="lat-blog-detail">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                <a href="blog-detail.html" className="btn-2">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Blog
