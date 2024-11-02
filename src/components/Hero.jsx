import React from 'react'
import profilepic from "../assets/ppic.png"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiPython,
  DiJava,
  DiMongodb,
  DiMysql
} from 'react-icons/di'

const Hero = () => {
  return (
    <div className='max-w-[900px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0' id='home'>

      <div className='grid grid-cols-2 md:col-span-5 p-8 glass'>

        <img className='w-[180px] h-auto' src={profilepic} />

        <div className='my-auto ml-8 flex-col text-gray-200'>
          <p className='text-xl md:text-xl font-bold'>Hi! I am Pratham Singh <br />
            <TypeAnimation sequence={[
              "Web Dev",
              1000,
              "UI/UX Dev",
              1000,
              "SDE",
              1000
            ]}

              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className='text-xl md:text-xl font-semibold text-gray-400'>with a 2+ years experience</p>
          <a href="/Resume.pdf" download="Resume"><button className='mt-4 px-4 py-2 text-lg font-bold text-white bg-primary-color rounded-xl'>Download Resume</button></a>
        </div>
      </div>

      <div className='grid md:col-span-3 gap-6'>


        <div className='text-5xl p-12 glass'>
          <p className='text-gray-200 text-xl font-bold mb-4 text-center'>My Tech Stack</p>
          <div className='grid grid-cols-4 gap-4'>
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiJavascript1 className="text-yellow-500" />
            <DiJava className="text-purple-600" />
            <DiReact className="text-blue-500" />
            <DiPython className="text-yellow-500" />
            <DiNodejsSmall className="text-green-500" />
            <DiMysql className="text-blue-500" />
          </div>
        </div>

        <div className='text-4xl gap-3 flex justify-center items-center glass text-gray-600'>
          <a href="https://github.com/prathamsingh19" className='hover:scale-110 transition-transform duration-300'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/prathamsingh19102003" className='hover:scale-110 transition-transform duration-300'><AiFillLinkedin /></a>
          <a href="https://www.instagram.com/prathamsingh.__/" className='hover:scale-110 transition-transform duration-300'><AiFillInstagram /></a>
        </div>

      </div>




















    </div>
  )
}

export default Hero