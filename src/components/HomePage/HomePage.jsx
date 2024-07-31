import React from 'react'
import Hero from './Hero/Hero'
import Redirections from './Redirections/Redirections'
import FeaturedProperties from './FeaturedProperties/FeaturedProperties'
// import StartToday from "../../containers/StartToday/StartToday"
import FAQ from './FAQ/FAQ'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Redirections />
      <FeaturedProperties />
      <FAQ />
      {/* <StartToday /> */}
    </div>
  )
}

export default HomePage
