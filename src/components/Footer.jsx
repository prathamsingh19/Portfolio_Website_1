import React from 'react'
import { FaGithubSquare  , FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div  className='max-w-[900px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
    <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold '>P. Singh</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
            <a href="https://github.com/prathamsingh19"  className='hover:scale-110 transition-transform duration-300'><FaGithubSquare/></a>
            <a href="https://www.linkedin.com/in/prathamsingh19102003"  className='hover:scale-110 transition-transform duration-300'><FaLinkedin/></a>
            <a href="https://www.instagram.com/prathamsingh.__/"  className='hover:scale-110 transition-transform duration-300'><FaInstagramSquare/></a>
            
            
        </div>


    </div>

    <p className='text-gray-400'>©2024 P. Singh</p>


    </div>
  )
}

export default Footer