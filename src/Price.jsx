import React from 'react'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
import PricingSection from './PricingSection'
import QuickSpaceFooter from './QuickSpaceFooter'
import StatsCard from './Components/StatsCard '

const Price = () => {
  return (
    <>
    <div className='container mx-auto max-w-[1350px]'>
        <Navbar/>
    <PricingSection/>
     
     
    </div>
    <StatsCard/>
    <ContactUs/>
    <div className='mt-20'>
        <QuickSpaceFooter/>
    </div>
    </>
  )
}

export default Price
