import React from 'react'

const Cart = () => {
  return (
    <div className="cart-dropdown header-link-dropdown">
        <ul className="cart-list link-dropdown-list">
            <li> 
                <a href="javascript:void(0)" className="close-cart"><i className="fa fa-times-circle"></i></a>
                <figure> 
                    <a href="product-detail.html" className="pull-left"> 
                        <img alt="product" src="images/product-1.jpg" />
                    </a>
                    <figcaption> 
                        <span>
                            <a href="product-detail.html">Men's Full Sleeves Collar Shirt</a>
                        </span>
                        <p className="cart-price">$14.99</p>
                        <div className="product-qty">
                            <label>Qty:</label>
                            <div className="custom-qty">
                                <input type="text" name="qty" value="1" title="Qty" className="input-text qty" disabled />
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>
            <li> 
                <a className="close-cart"><i className="fa fa-times-circle"></i></a>
                <figure> 
                    <a href="product-detail.html" className="pull-left"> 
                        <img alt="product" src="images/product-2.jpg" />
                    </a>
                    <figcaption> 
                        <span>
                            <a href="product-detail.html">Women's Cape Jacket</a>
                        </span>
                        <p className="cart-price">$14.99</p>
                        <div className="product-qty">
                            <label>Qty:</label>
                            <div className="custom-qty">
                                <input type="text" name="qty" value="1" title="Qty" className="input-text qty" disabled />
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>
        </ul>
        <p className="cart-sub-totle"> 
            <span className="pull-left">Cart Subtotal</span> 
            <span className="pull-right"><strong className="price-box">$29.98</strong></span> 
        </p>
        <div className="clearfix"></div>
        <div className="mt-20"> 
            <a href="cart.html" className="btn">Cart</a> 
            <a href="checkout.html" className="btn btn-color right-side">Checkout</a> 
        </div>
    </div>
  )
}

export default Cart
