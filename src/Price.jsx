import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
import PricingSection from './PricingSection'
import QuickSpaceFooter from './QuickSpaceFooter'
import StatsCard from './Components/StatsCard '
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS script

const Price = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1000, // Set animation duration (optional)
          once: true, // Animation should only happen once (optional)
        });
      }, []);
  return (
    <>
    <div className='container mx-auto max-w-[1350px]'>
        <Navbar/>
    
   <div data-aos="fade-up" ><PricingSection/></div>
     
     
    </div>
    <div data-aos="fade-left"><StatsCard/></div>
    <div data-aos="fade-right"><ContactUs/></div>
    <div className='mt-20' data-aos="fade-up">
        <QuickSpaceFooter/>
    </div>
    </>
  )
}

export default Price
