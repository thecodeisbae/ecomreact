import React from 'react'

const FeaturedCategories = (props) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
        <ul id="tabs" className="product-isotop filters-product text-right text-uppercase nav nav-tabs" role="tablist">
            <li role="presentation" className="transition" data-filter="*">
                <a href="#all" className="active" role="tab" data-toggle="tab">Tous</a>
            </li>
            {
                props.categories.map(
                    (item) => (
                        <li key={item.id} role="presentation" className="transition" data-filter={item.name.toLowerCase()}>
                            <a href={`#${item.name.toLowerCase()}`} role="tab" data-toggle="tab">{item.name}</a>
                        </li>
                    )
                )
            }
        </ul>
    </div>
  )
}

export default FeaturedCategories
