import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import QuickSpaceFooter from './QuickSpaceFooter'

const Home = () => {
  return (
    <>
    <div className="container mx-auto max-w-[1350px]">

        <Navbar/>
        <div className=''>
    <Hero/>

        </div>

   
    </div>
    <div className='mt-20'>
<QuickSpaceFooter/>
        </div>

    </>
  )
}

export default Home
