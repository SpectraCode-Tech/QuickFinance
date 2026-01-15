import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between p-5 items-center text-dark-green'>
      <h1 className="">QuickFinance</h1>
      <ul className="flex space-x-4">
        <li><a href="">Services</a></li>
        <li className='cta-btn'><a href="" className=''>Book <span className='hidden sm:inline'>an Appointment</span></a></li>
      </ul>
    </div>
  )
}

export default navbar
