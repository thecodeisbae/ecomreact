import React from 'react'
import FeaturedCategories from './FeaturedCategories'
import FeaturedProducts from './FeaturedProducts'

const FeaturedSection = (props) => {
   return (
    <section className="featured pt-100">
        <div className="container">
            <div className="row mb-25">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="hading">
                        <h2 className="hading-title">PRODUITS EN <span>VOGUE</span></h2>
                    </div>
                </div>
                <FeaturedCategories categories={props.categories}/>
            </div>
            <FeaturedProducts products={props.products} categories={props.categories}/>
        </div>
    </section>
  )
}

export default FeaturedSection
