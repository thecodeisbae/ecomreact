import React from 'react'
import Blog from './Blog'

const BlogSection = () => {
  return (
    <section className="latest-blog pt-100">
        <div className="container">
            <div className="latest-blog-inner">
                <div className="hading pb-20">
                    <h2 className="hading-title">latest<span>blog</span></h2>
                </div>
                <div className="latest-blog-salid owl-carousel">
                    <Blog />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSection
