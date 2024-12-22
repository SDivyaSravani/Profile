import React from 'react';
import {IoArrowForward} from "react-icons/io5";
import AboutImg from "../../assets/About.png";



const About = () => {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80 h-50' src={AboutImg} alt="About img" />

                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend</h1>
                            <p className='text-sm md:text-md leading-tight mt-4'>
                                I have learned frontend development and worked on several projects independently, focusing on creating user-friendly and visually appealing interfaces. I have experience using HTML, CSS, JavaScript, React, and Tailwind CSS.
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database</h1>
                            <p className='text-sm md:text-md leading-tight mt-4'>
                                I have learned and worked on database-related projects independently, focusing on using MongoDB and SQL
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Programming Languages</h1>
                            <p className='text-sm md:text-md leading-tight mt-4'>
                            I have knowledge of programming languages like Python and Java, with more familiarity in Python.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About;
