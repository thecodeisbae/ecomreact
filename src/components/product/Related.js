import React from 'react'

const Related = () => {
  return (
    <section className="featured pt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="related-title">Related Product</h2>
                </div>
                <div className="featured-product mb-25">
                    <div className="product-img transition mb-15">
                        <a href="product-detail.html">
                            <img src="/images/product-1.jpg" alt="product" className="transition" />
                        </a>
                        <div className="new-label">
                            <span className="text-uppercase">New</span>
                        </div>
                        <div className="product-details-btn text-uppercase text-center transition">
                            <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                        </div>
                    </div>
                    <div className="product-desc">
                        <a href="product-detail.html" className="product-name text-uppercase">men's harpoon 2 eye boo</a>
                        <span className="product-pricce">$478.00</span>
                    </div>
                </div>
                <div className="featured-product mb-25">
                    <div className="product-img transition mb-15">
                        <a href="product-detail.html">
                            <img src="/images/product-2.jpg" alt="product" className="transition" />
                        </a>
                        <div className="product-details-btn text-uppercase text-center transition">
                            <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                        </div>
                    </div>
                    <div className="product-desc">
                        <a href="product-detail.html" className="product-name text-uppercase">AENEAN EU TRISTIQUE</a>
                        <span className="product-pricce">$478.00</span>
                    </div>
                </div>
                <div className="featured-product mb-25">
                    <div className="product-img transition mb-15">
                        <a href="product-detail.html">
                            <img src="/images/product-3.jpg" alt="product" className="transition" />
                        </a>
                        <div className="sale-label">
                            <span className="text-uppercase">sale</span>
                        </div>
                        <div className="product-details-btn text-uppercase text-center transition">
                            <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                        </div>
                    </div>
                    <div className="product-desc">
                        <a href="product-detail.html" className="product-name text-uppercase">AENEAN SAGITTIS</a>
                        <span className="product-pricce">$478.00</span>
                    </div>
                </div>
                <div className="featured-product mb-25">
                    <div className="product-img transition mb-15">
                        <a href="product-detail.html">
                            <img src="/images/product-4.jpg" alt="product" className="transition" />
                        </a>
                        <div className="product-details-btn text-uppercase text-center transition">
                            <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                        </div>
                    </div>
                    <div className="product-desc" data-category="accessories">
                        <a href="product-detail.html" className="product-name text-uppercase">ALIQUAM LOBORTIS EST</a>
                        <span className="product-pricce">$478.00</span>
                    </div>
                    </div>
                <div className="featured-product mb-25">
                    <div className="product-img transition mb-15">
                        <a href="product-detail.html">
                            <img src="/images/product-5.jpg" alt="product" className="transition" />
                        </a>
                        <div className="product-details-btn text-uppercase text-center transition">
                            <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                        </div>
                    </div>
                    <div className="product-desc">
                        <a href="product-detail.html" className="product-name text-uppercase">AUCTOR GRAVIDA ENIM</a>
                        <span className="product-pricce">$478.00</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Related
