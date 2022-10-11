import React from 'react'

const Slider = () => {
  return (
		<section className="home-banner">
            <div className="container">
                <div className="home-slider owl-carousel">
                    <div className="banner-bg align-flax">
                        <div className="w-100">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                    <div className="banner-img"><img src="images/banner.jpg" alt="banner" /></div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                    <div className="banner-heading w-100">
                                        <label className="banner-top">Get UP To <span>40%</span> Off</label>
                                        <h2 className="banner-title">men <span>shoes</span></h2>
                                        <p className="banner-sub">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                        <a href="product-detail.html" className="btn">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-bg align-flax">
                        <div className="w-100">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                    <div className="banner-img"><img src="images/banner-2.png" alt="banner" /></div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                    <div className="banner-heading w-100">
                                        <label className="banner-top">Get UP To <span>40%</span> Off</label>
                                        <h2 className="banner-title">season <span>sale</span></h2>
                                        <p className="banner-sub">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                        <a href="product-detail.html" className="btn">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Slider
