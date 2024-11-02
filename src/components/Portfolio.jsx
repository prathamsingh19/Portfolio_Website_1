import React, { useState } from 'react'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai'
import { MdDescription } from 'react-icons/md';

const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "AI Chat Bot Application",
        links: {
            site:"https://ai-chat-bot-pratham.vercel.app/",
            github: "https://github.com/prathamsingh19/AI_Chat_Bot_Web_Application"
        }
    },
    {
        img: project2,
        title: "Project #2",
        description: "Realtime Chat Application",
        links: {
            
            github: "https://github.com/prathamsingh19/Chat_Web_Application"
        }
    },
    {
        img: project3,
        title: "Project #3",
        description: "News Web Application",
        links: {
            
            github: "https://github.com/prathamsingh19/News_Web_Application"
        }
    },
    {
        img: project4,
        title: "Project #4",
        description: "Netflix UI Clone",
        links: {
            site:"https://netflix-ui-clone-pratham.vercel.app/",
            github: "https://github.com/prathamsingh19/Netflix_UI_Clone"
        }
    },
    {
        img: project5,
        title: "Project #5",
        description: "Bubble Game",
        links: {
            
            github: "https://github.com/prathamsingh19/Bubble_Game"
        }
    },
    {
        img: project6,
        title: "Project #6",
        description: "Brick Breaker Game",
        links: {
            site:"https://brick-breaker-game-pratham.vercel.app/",
            github: "https://github.com/prathamsingh19/Brick_Breaker_Game"
        },
    }
]

const Portfolio = () => {

    const [currentProject, setCurrentProject] = useState(0)

  return (
    <div className=' my-6 max-w-[900px] mx-auto grid grid-cols-8 gap-6' id='portfolio'>
        <div className='relative z-10 col-span-3 grid place-items-center grid-cols-1'>
            <p className='text-gray-200 font-bold text-4xl -skew-y-6'>Select Project <img src={arrow} className='absolute w-[40px] scale-x-[-1]'/></p>
            

            <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl'>
                  {projects.map((project,index) =>(
                    <li key={index} onClick={()=> setCurrentProject(index)} 
                    className={`cursor-pointer text-gray-300 ${currentProject === index ? 'active-project' : ''}`}>
                    {project.title}
                    </li>

                  ))}

            </ul>



            
        </div>

        <div className='z-10 glass w-full col-span-5'>
            <div className='w-full h-80'>
                <img src={projects[currentProject].img}
                className='w-full h-full object-cover rounded-lg mb-4' />
            </div>

            <div className='p-6'>
                <p className='text-gray-200 my-4'>{projects[currentProject].description}</p>
                <div className='flex space-x-4 '>
                    <a href={projects[currentProject].links.site}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
                    <a href={projects[currentProject].links.github}
                     className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg text-xl hover:bg-slate-700 transition duration-300'><AiFillGithub/></a>

                </div>
            </div>
        </div>





    </div>
    

  )
}

export default Portfolio