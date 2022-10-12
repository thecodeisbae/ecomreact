import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router';

const ProductDetails = (props) => {
    
    let { id } = useParams();

    const [product,setProduct] = useState([]);
    
    const getProduct = async (id) => {
        const data = await fetch(`http://localhost:5000/products/${id}`);
        return data.json()
    }

    useEffect(() => {
        const init = async () => {
            setProduct(await getProduct(id));
        }

        props.imageSlider()

        init();
    });

    return (
    <div className="row mfp-content-bg">
        <div className="col-lg-5 col-md-6 col-12">
            <div className="align-center mb-md-30">
                <ul id="glasscase" className="gc-start">
                    <li><img src="/images/12.jpg" alt="Xpoge" /></li>
                    <li><img src="/images/13.jpg" alt="Xpoge" /></li>
                    <li><img src="/images/14.jpg" alt="Xpoge" /></li>
                    <li><img src="/images/15.jpg" alt="Xpoge" /></li>
                    <li><img src="/images/16.jpg" alt="Xpoge" /></li>
                    <li><img src="/images/17.jpg" alt="Xpoge" /></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-7 col-md-6 col-12">
            <div className="product-detail-in mt-5">
                <h2 className="product-item-name text-uppercase mt-5">{product.title}</h2>
                <div className="price-box"> 
                    <span className="price">{product.price} XOF</span> 
                    <div className="product-des">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in oluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <ul className="product-list-check">
                        <li><i className="fa fa-check"></i> Satisfaction 100% Guaranteed</li>
                        <li><i className="fa fa-check"></i> Free shipping on orders over $99</li>
                        <li><i className="fa fa-check"></i> 14 day easy Return</li>
                    </ul>
                    <div className="row mt-20">
                        <div className="col-12">
                            <div className="table-listing qty">
                                <label>Qut:</label>
                                <div className="fill-input">
                                    <button type="button" id="sub" className="sub cou-sub">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </button>
                                    <input type="number" id="1" className="input-text qty" value="1" min="1" max="3" />
                                    <button type="button" id="add" className="add cou-sub">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-action">
                                <ul>
                                    <li>
                                        <a href="cart.html" className="btn btn-color">
                                            <img src="/images/shop-bag.png" alt="bag" />
                                            <span>add to cart</span>
                                        </a>
                                    </li>
                                    <li><a href="javascript:void(0)" className="btn"><i className="fa fa-heart" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
