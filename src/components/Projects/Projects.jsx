import React from 'react';
import ProjectCard from './ProjectCard';
import bannerImg from "../../assets/shopping.png";
import port from "../../assets/portfolio.png";
import crypto from "../../assets/crypto_price.png";
import searchImg from "../../assets/SearchImage.jpg";
import rockPaperScissors from "../../assets/RockPaperScissors.jpg";

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex justify-between flex-wrap gap-5'>
            <ProjectCard title="Shopping website" Demo="https://sdivyasravani.github.io/Shopping-Webpage/" code="https://github.com/SDivyaSravani/Shopping-Webpage" main="Created a basic shopping website using HTML, CSS, and Bootstrap involves designing a simple layout that includes key elements like a navigation bar, product listings, a shopping cart, and a footer. "  banner={bannerImg} />
            <ProjectCard title="Image Search Engine" Demo="https://sdivyasravani.github.io/SearchImages/" code="https://github.com/SDivyaSravani/SearchImages" main="Developed an image search bar using HTML, CSS, and JavaScript. Integrated an API to fetch and display images based on user input. Ensured a responsive and smooth user experience."  banner={searchImg} />
            <ProjectCard title="Rock Paper Scissors" Demo="https://sdivyasravani.github.io/RockPaperScissors/" code="https://github.com/SDivyaSravani/RockPaperScissors" main="Created a fun game using HTML, CSS, and JavaScript where a player competes against a computer with random choices. Added score tracking and a responsive UI for smooth gameplay."  banner={rockPaperScissors} />
            <ProjectCard title="Portfolio" Demo="https://sdivyasravani.github.io/Profile/" code="https://github.com/SDivyaSravani/Profile" main="I developed a portfolio website using React and Tailwind CSS, highlighting my skills and projects in a dynamic, responsive layout. The site offers an engaging and modern presentation of my work." banner={port} />
        </div>
    </div>
  )
}

export default Projects;