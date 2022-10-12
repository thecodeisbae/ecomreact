import React from 'react'

const Banner = ({product}) => {
  return (
    <section className="page-banner">
        <div className="container">
            <div className="page-banner-in">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12">
                        <h1 className="page-banner-title text-uppercase">Boutique</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                        <ul className="right-side">
                            <li><a href="index.html">Accueil</a></li>
                            <li><a href="shop.html">Boutique</a></li>
                            <li><span className="">{product.title}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
