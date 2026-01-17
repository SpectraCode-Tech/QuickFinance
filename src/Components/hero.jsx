import React from 'react'
import Navbar from '../Components/navbar'
import heroImage from '../assets/hero.png'

const hero = () => {
  return (
    <div className='bg-light-green sm:h-screen'>
      <Navbar />
      <header className="container *:justify-self-center px-4 py-8 flex flex-col-reverse sm:grid grid-cols-2 items-center text-dark-green">
        <div className="space-y-4 mt-7 sm:mt-0">
            <h1 className="text-2xl font-medium">Financial Clarity You Can Trust</h1>
            <p className="">Trusted financial guidance for every stage of life and business since 1987</p>
            <a href="" className='mt-10 cta-btn'>Connect with our experts</a>
        </div>
          <img src={heroImage} className='mx-auto sm:mx-0' alt="" />
      </header>
    </div>
  )
}

export default hero