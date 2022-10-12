import React from 'react'
import Slider from './main/Slider'
import FeaturedSection from './main/FeaturedSection'
import BlogSection from './main/BlogSection'
import Partners from './main/Partners'

const Main = (props) => {
  return (
    <>
      <Slider />
      <FeaturedSection products={props.products} categories={props.categories} />
      <BlogSection />
      <Partners />
    </>
  )
}

export default Main
