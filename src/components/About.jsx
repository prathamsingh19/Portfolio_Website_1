import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project7.png'
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

const About = () => {
    return (
        <div className='max-w-[900px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>
            <div className='p-6'>
                <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
                <p className='text-gray-300 mb-4'>
                    As a passionate web developer with over 2 years of
                    experience, I have a proven track record of creating visually
                    stunning and responsive websites.
                </p>
                <div className='flex flex-wrap gap-4 text-4xl justify-center'>
                    <DiHtml5 className="text-orange-600" />
                    <DiCss3 className="text-blue-600" />
                    <DiJavascript1 className="text-yellow-500" />
                    <DiJava className="text-purple-600" />
                    <DiReact className="text-blue-500" />
                    <DiPython className="text-yellow-500" />
                    <DiNodejsSmall className="text-green-500" />

                </div>
                </div>

                <div className='relative group'>
                    <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                             blur opacity-25 group-hover:opacity-100 transition duration-300  '></div>
                    <div className='relative w-full p-1 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                        <img src={project1} className='rounded-lg md:max-w-[340px]'/>
                    </div>
                </div>

                <div className='relative group order-2 md:order-1'>
                    <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                    blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
                    <div className='relative w-full p-1 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                        <img src={project2} className='rounded-lg md:max-w-[340px]'/>
                    </div>
                </div>


                <div className='p-6 order-1 md:order-2'>
                    <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
                    <p className='text-gray-300 mb-4'>
                        Experienced in creating modern, responsive web applications using
                        the latest frontend technologies.
                    </p>




                </div>

            


        </div>
    )
}

export default About