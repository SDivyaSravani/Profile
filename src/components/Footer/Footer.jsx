import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="Footer" className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div className='me-4'>
            <h1 className='text-xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out</h3>
        </div>
        
        <ul className='text-sm md:text-xl ms-1'>
            <li className='flex gap-1 items-center mb-2'>
                <MdOutlineEmail size={20} />
                <a href="mailto:sankarasettydivyasravani@gmail.com">sankarasettydivyasravani@gmail.com</a>
            </li>
            <li className='flex gap-1 items-center mb-2'>
                <FiPhone />
                <a href="tel:+917386345321">+91 7386345321</a>
            </li>
            <li className='flex gap-1 items-center mb-2'>
                <CiLinkedin  />
                <a href="https://www.linkedin.com/in/divya-sravani-sankarasetty-68329b229/" target="_blank">LinkedIn</a>
            </li>
            <li className='flex gap-1 items-center mb-2'>
                <FaGithub />
                <a href='https://github.com/SDivyaSravani?tab=overview&from=2024-12-01&to=2024-12-21' target="_blank">GitHub</a>
            </li>
            <li></li>
        </ul>
    </div>
  )
}

export default Footer