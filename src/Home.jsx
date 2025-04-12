import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import QuickSpaceFooter from './QuickSpaceFooter'
import StatsCard from './Components/StatsCard '
import Partner from './Components/Partner'
import BusinessGrow from './Components/BusinessGrow'
import BankingApp from './Components/BankingApp'
import TestimonialsSection from './Components/TestimonialsSection'
import ContactUs from './Components/ContactUs'

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS script
const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set animation duration (optional)
      once: true, // Animation should only happen once (optional)
    });
  }, []);
  return (
    <>
    <div className="container mx-auto max-w-[1350px]">

        <Navbar/>
        <div className='' data-aos="fade-up">
    <Hero/>

        </div>
        <div className='my-20'>
        <Partner/>
          
        </div>
        <div className="mt-30" data-aos="fade-right">
        <BusinessGrow/>
        </div>
        <div className="mb-30" data-aos="fade-left">
          <BankingApp/>
        </div>
        

   
    </div>
    
    <div className='' data-aos="fade-down">
          <StatsCard/>
        </div>
        <div className="mt-10 md:mt-20" data-aos="fade-up">
    <ContactUs/>
    </div>
    <div className='mb-25 md:mb-25'>
      <TestimonialsSection/>
    </div>
   
    <div className='mt-20' data-aos="fade-up">
  <QuickSpaceFooter/>
        </div>
    

    </>
  )
}

export default Home
