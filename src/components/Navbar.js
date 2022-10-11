import React from 'react'
import Cart from './Cart'
import ShopFragment from './ShopFragment'

const Navbar = () => {
  return (
        <header className="header transition">
            <div className="container position-r">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-6 align-flax">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="index.html">
                                <img alt="log" src="images/logo.png" className="transition" />
                            </a> 
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-8 col-6 position-i">
                        <div className="menu-left transition">
                            <div className="menu" >
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="dropdown">
                                        <span className="opener plus"></span>
                                        <a href="shop.html">Pages</a>
                                        <div className="megamenu">
                                            <div className="megamenu-inner">
                                                <ul>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="shop-list.html">Shop List</a></li>
                                                    <li><a href="product-detail.html">Product Detail</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <span className="opener plus"></span>
                                        <a href="shop.html">Shop</a>
                                        <ShopFragment />
                                    </li>
                                    <li className="dropdown">
                                        <span className="opener plus"></span>
                                        <a href="blog-left.html">Blog</a>
                                        <div className="megamenu">
                                            <div className="megamenu-inner">
                                                <ul>
                                                    <li><a href="blog-left.html">Blog Left</a></li>
                                                    <li><a href="blog-right.html">Blog Right</a></li>
                                                    <li><a href="blog-detail.html">Blog Detail</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-right">
                            <div className="menu-toggle"><span></span></div>
                            <div className="search-menu">
                                <input type="text" name="search" className="search-input" placeholder="Search text" />
                                <input type="submit" name="submit" className="search-btn" />
                                <div className="search-button-i transition">
                                    <img src="images/search.png" className="position-r transition" alt="search" />
                                </div>
                            </div>
                            <ul className="login-cart">
                                <li>
                                    <div className="login-head">
                                        <a href="login.html"><i className="fa fa-user-o" aria-hidden="true"></i></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="cart-menu">
                                        <div className="cart-icon position-r">
                                            <img src="images/car-icon-w.png" className="position-r transition" alt="cart" />
                                        </div>
                                       <Cart />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Navbar
