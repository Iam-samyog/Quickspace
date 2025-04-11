import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import QuickSpaceFooter from './QuickSpaceFooter'
import StatsCard from './Components/StatsCard '
import Partner from './Components/Partner'

const Home = () => {
  return (
    <>
    <div className="container mx-auto max-w-[1350px]">

        <Navbar/>
        <div className=''>
    <Hero/>

        </div>
        <div className='my-20'>
          <Partner/>
        </div>
        

   
    </div>
    <div className=''>
          <StatsCard/>
        </div>
    <div className='mt-20'>
  <QuickSpaceFooter/>
        </div>
    

    </>
  )
}

export default Home
