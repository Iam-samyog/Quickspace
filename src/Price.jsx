import React from 'react'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
import PricingSection from './PricingSection'
import QuickSpaceFooter from './QuickSpaceFooter'

const Price = () => {
  return (
    <>
    <div className='container mx-auto max-w-[1350px]'>
        <Navbar/>
    <PricingSection/>
      <ContactUs/>
    </div>
    <div className='mt-20'>
        <QuickSpaceFooter/>
    </div>
    </>
  )
}

export default Price
