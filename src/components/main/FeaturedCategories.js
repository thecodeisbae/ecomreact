import React from 'react'

const FeaturedCategories = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
        <ul id="tabs" className="product-isotop filters-product text-right text-uppercase nav nav-tabs" role="tablist">
            <li role="presentation" className="transition" data-filter="*">
                <a href="#all" className="active" role="tab" data-toggle="tab">all</a>
            </li>
            <li role="presentation" className="transition" data-filter=".shoes">
                <a href="#shoes" role="tab" data-toggle="tab">Shoes</a>
            </li>
            <li role="presentation" className="transition" data-filter=".women">
                <a href="#women" role="tab" data-toggle="tab">Women</a>
            </li>
            <li role="presentation" className="transition" data-filter=".accessories">
                <a href="#accessories" role="tab" data-toggle="tab">Accessories</a>
            </li>
        </ul>
    </div>
  )
}

export default FeaturedCategories
