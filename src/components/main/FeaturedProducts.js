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
                                <Link to={`/product/${item.id}`}>
                                    <img src={item.image ? `images/${item.image}`: 'images/default_product.jpg'} alt="product" className="transition" />
                                </Link>
                                <div className="new-label">
                                    <span className="text-uppercase">New</span>
                                </div>
                                <div className="product-details-btn text-uppercase text-center transition">
                                    <Link to={`/product/${item.id}`} className="quick-popup mfp-iframe">Quick View</Link>
                                </div>
                            </div>
                            <div className="product-desc">
                                <Link to={`/product/${item.id}`} className="product-name text-uppercase">{item.title}</Link>
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
                                                <Link to={`/product/${prod.id}`}>
                                                    <img src={prod.image ? `images/${prod.image}`: 'images/default_product.jpg'} alt="product" className="transition" />
                                                </Link>
                                                <div className="product-details-btn text-uppercase text-center transition">                                    
                                                    <Link to={`/product/${prod.id}`} className="quick-popup">Quick View</Link>
                                                </div>
                                            </div>
                                            <div className="product-desc" data-category="accessories">
                                                <Link to={`/product/${prod.id}`} className="product-name text-uppercase">{prod.title}</Link>
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
    </div>
  )
}

export default FeaturedProducts
