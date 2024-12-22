import React from 'react';
import ProjectCard from './ProjectCard';
import bannerImg from "../../assets/shopping.png";
import port from "../../assets/portfolio.png"

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard title="Shopping website" main="Created a basic shopping website using HTML, CSS, and Bootstrap involves designing a simple layout that includes key elements like a navigation bar, product listings, a shopping cart, and a footer. "  banner={bannerImg} />
            <ProjectCard title="Spotify Clone" main="Using react , Tailwind" banner="" />
            <ProjectCard title="Portfolio" main="I have developed my portfolio website utilizing React and Tailwind CSS, showcasing my skills and projects in a dynamic, responsive layout." banner={port} />
        </div>
    </div>
  )
}

export default Projects