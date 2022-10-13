import React from 'react'

const Cart = ({cart,setCart}) => {
  return (
    <div className="cart-dropdown header-link-dropdown">
        <ul className="cart-list link-dropdown-list">
            {
                cart.map((item)=>(    
                    <li> 
                        <a href="#" className="close-cart"><i className="fa fa-times-circle"></i></a>
                        <figure> 
                            <a href="product-detail.html" className="pull-left"> 
                                <img alt="product" src="/images/product-1.jpg" />
                            </a>
                            <figcaption> 
                                <span>
                                    <a href="product-detail.html">{item.title}</a>
                                </span>
                                <p className="cart-price">{item.price} XOF</p>
                                <div className="product-qty">
                                    <label>Qte:</label>
                                    <div className="custom-qty">
                                        <input type="text" name="qty" value={item.qty} title="Qty" className="input-text qty" disabled />
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                ))
            }
        </ul>
        <p className="cart-sub-totle"> 
            <span className="pull-left">Sous-Total</span> 
            <span className="pull-right"><strong className="price-box"></strong></span> 
        </p>
        <div className="clearfix"></div>
        <div className="mt-20"> 
            <a href="cart.html" className="btn">Panier</a> 
            <a href="checkout.html" className="btn btn-color right-side">Commander</a> 
        </div>
    </div>
  )
}

export default Cart
