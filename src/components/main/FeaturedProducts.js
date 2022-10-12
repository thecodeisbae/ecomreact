import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProducts = (props) => {
  return (
    <div className="tab-content">
        <div role="tabpanel" className="row tab-pane fade active show" id="all">
            {
                props.products.map((item)=>(
                        <div key={item.id} className="featured-product mb-25">
                            <div className="product-img transition mb-15">
                                <a href="product-detail.html">
                                    <img src={item.image ? `images/${item.image}`: 'images/default_product.jpg'} alt="product" className="transition" />
                                </a>
                                <div className="new-label">
                                    <span className="text-uppercase">New</span>
                                </div>
                                <div className="product-details-btn text-uppercase text-center transition">
                                    <Link to="/product" onClick={()=> props.onPreview(item)} className="quick-popup mfp-iframe">Quick View</Link>
                                </div>
                            </div>
                            <div className="product-desc">
                                <a href="product-detail.html" className="product-name text-uppercase">{item.title}</a>
                                <span className="product-pricce">{item.price} XOF</span>
                            </div>
                        </div>
                    )
                )
            }
        </div>
        {
            props.categories.map(
                (category) =>
                (
                    <div key={category.id} role="tabpanel" className="row tab-pane fade" id={category.name.toLowerCase()}>
                        {
                            (props.products.filter((product) => product.category === category.id).length > 0) ? 
                                props.products.filter((product) => product.category === category.id).map(
                                    (prod)=>(
                                        <div key={prod.id} className="featured-product mb-25">
                                            <div className="product-img transition mb-15">
                                                <a href="product-detail.html">
                                                    <img src={prod.image ? `images/${prod.image}`: 'images/default_product.jpg'} alt="product" className="transition" />
                                                </a>
                                                <div className="product-details-btn text-uppercase text-center transition">
                                                    <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                                                </div>
                                            </div>
                                            <div className="product-desc" data-category="accessories">
                                                <a href="product-detail.html" className="product-name text-uppercase">{prod.title}</a>
                                                <span className="product-pricce">{prod.price} XOF</span>
                                            </div>
                                        </div>
                                    )
                                ) 
                                :
                                <div align="center" className="container-fluid">
                                    <h1 align="center" className="text-dosis">AUCUN PRODUIT</h1>
                                </div>
                        }
                    </div>
                )
            )
        }
        {/* <div role="tabpanel" className="row tab-pane fade" id="shoes">
           
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-5.jpg" alt="product" className="transition" />
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
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-6.jpg" alt="product" className="transition" />
                    </a>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">BLIQUAM LOBORTIS</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-7.jpg" alt="product" className="transition" />
                    </a>
                    <div className="new-label">
                        <span className="text-uppercase">New</span>
                    </div>
                    <div className="sale-label">
                        <span className="text-uppercase">sale</span>
                    </div>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">BUSCIPIT AT MAGNA</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-8.jpg" alt="product" className="transition" />
                    </a>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">CONDIMENTUM POSUERE</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-9.jpg" alt="product" className="transition" />
                    </a>
                    <div className="new-label">
                        <span className="text-uppercase">New</span>
                    </div>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">DIGNISSIM VENENATIS</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-10.jpg" alt="product" className="transition" />
                    </a>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">ELEIFEND ARCU</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
        </div> */}
        {/* <div role="tabpanel" className="row tab-pane fade" id="women">
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-3.jpg" alt="product" className="transition" />
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
                        <img src="images/product-4.jpg" alt="product" className="transition" />
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
                        <img src="images/product-5.jpg" alt="product" className="transition" />
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
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-6.jpg" alt="product" className="transition" />
                    </a>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">BLIQUAM LOBORTIS</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-7.jpg" alt="product" className="transition" />
                    </a>
                    <div className="new-label">
                        <span className="text-uppercase">New</span>
                    </div>
                    <div className="sale-label">
                        <span className="text-uppercase">sale</span>
                    </div>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">BUSCIPIT AT MAGNA</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
        </div>
        <div role="tabpanel" className="row tab-pane fade" id="accessories">
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-5.jpg" alt="product" className="transition" />
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
            <div className="featured-product mb-25">
                <div className="product-img transition mb-15">
                    <a href="product-detail.html">
                        <img src="images/product-6.jpg" alt="product" className="transition" />
                    </a>
                    <div className="product-details-btn text-uppercase text-center transition">
                        <a href="product-quick-view.html" className="quick-popup">Quick View</a>
                    </div>
                </div>
                <div className="product-desc">
                    <a href="product-detail.html" className="product-name text-uppercase">BLIQUAM LOBORTIS</a>
                    <span className="product-pricce">$478.00</span>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default FeaturedProducts
