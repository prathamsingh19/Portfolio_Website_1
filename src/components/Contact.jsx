import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='px-6 max-w-[900px] px- mx-auto grid md:grid-cols-2 place-items-center ' id='contact'>
      <div>

        <div className='text-gray-300 my-3 p-2'>
          <h3 className='text-4xl font-semibold mb-5'>Let's <span>connect</span></h3>
          <p className='text-justify leading-7'>
            I’m eager to collaborate, share ideas, and bring our creative visions to life. Reach out and let's start!
          </p>
        </div>

        <div className='flex mt-10 items-center gap-7'>
          <div className='bg-[#252525] p-5 rounded-lg'>
            <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>9 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>projects made</p>
          </div>

          <div className='bg-[#252525] p-5 rounded-lg'>
            <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>2 <span>+</span></h3>
            <p className='text-xs  md:text-base text-gray-200'>years experience</p>
          </div>

          <div className='bg-[#252525] p-5 rounded-lg'>
            <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>3 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>internships completed</p>
          </div>

        </div>

      </div>

      <form action="https://formsubmit.co/8963d368cba2d46f30e4538209d9124d" method="POST" className='max-w-6xl p-5 md:p-12' id='form'>
        <input 
        type="text"
          id='name'
          placeholder='Your name...'
          name='name'
          className='mb-2 w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."'
        />

        <input 
        type="email"
          id='email'
          placeholder='Your email...'
          name='email'
          className='mb-2 w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."'
        />

        <textarea
        type="textarea"
          id='textarea'
          cols="30"
          rows="4"
          placeholder='Your message...'
          name='message'
          className='mb-2 w-full resize-none bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."'
        />
        <input type="hidden" name="_captcha" value="false"></input>
        <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
          Send Message
        </button>



      </form>






    </div>
  )
}

export default Contact