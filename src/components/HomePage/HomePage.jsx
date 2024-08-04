import React from 'react'
import Hero from './Hero/Hero'
import Hero2 from './Hero2/Hero2'
import FeaturedProperties from './FeaturedProperties/FeaturedProperties'
import FAQ from './FAQ/FAQ'

const HomePage = () => {
  return (
    <div>
      <Hero2 />
      <Hero />
      <FeaturedProperties />
      <FAQ />
    </div>
  )
}

export default HomePage
