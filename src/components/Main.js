import React from 'react'
import Slider from './main/Slider'
import FeaturedSection from './main/FeaturedSection'
import BlogSection from './main/BlogSection'
import Partners from './main/Partners'
import { useEffect } from 'react'

const Main = (props) => {

  useEffect(() => {
    const init = async () => {
      await props.homeSlider();
    }
    init();
  });  

  return (
    <>
      <Slider />
      <FeaturedSection products={props.products} categories={props.categories} onPreview={props.onPreview}/>
      <BlogSection />
      <Partners />
    </>
  )
}

export default Main
