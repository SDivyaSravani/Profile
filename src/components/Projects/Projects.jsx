import React from 'react';
import ProjectCard from './ProjectCard';
import bannerImg from "../../assets/shopping.png";
import port from "../../assets/portfolio.png";
import crypto from "../../assets/crypto_price.png";
import searchImg from "../../assets/SearchImage.jpg";
import rockPaperScissors from "../../assets/RockPaperScissors.jpg";
import news from "../../assets/news.png";
import music from "../../assets/music.png";

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold mb-6'>Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            <ProjectCard title="Shopping website" Demo="https://sdivyasravani.github.io/Shopping-Webpage/" code="https://github.com/SDivyaSravani/Shopping-Webpage" main="Created a basic shopping website using HTML, CSS, and Bootstrap involves designing a simple layout that includes key elements like a navigation bar, product listings, a shopping cart, and a footer. "  banner={bannerImg} />
            <ProjectCard title="Image Search Engine" Demo="https://sdivyasravani.github.io/SearchImages/" code="https://github.com/SDivyaSravani/SearchImages" main="Developed an image search bar using HTML, CSS, and JavaScript. Integrated an API to fetch and display images based on user input. Ensured a responsive and smooth user experience."  banner={searchImg} />
            <ProjectCard title="Rock Paper Scissors" Demo="https://sdivyasravani.github.io/RockPaperScissors/" code="https://github.com/SDivyaSravani/RockPaperScissors" main="Created a fun game using HTML, CSS, and JavaScript where a player competes against a computer with random choices. Added score tracking and a responsive UI for smooth gameplay."  banner={rockPaperScissors} />
            <ProjectCard title="Crypto Price Website" Demo="https://sdivyasravani.github.io/Crypto_Price/" code="https://github.com/SDivyaSravani/Crypto_Price" main="This React-based website tracks cryptocurrency prices by fetching real-time data from an API, updating every few hours. It displays current prices and 24-hour changes in a simple, responsive layout." banner={crypto} />
            <ProjectCard title="Portfolio" Demo="https://sdivyasravani.github.io/Profile/" code="https://github.com/SDivyaSravani/Profile" main="I developed a portfolio website using React and Tailwind CSS, highlighting my skills and projects in a dynamic, responsive layout. The site offers an engaging and modern presentation of my work." banner={port} />
            <ProjectCard title="Latest News" Demo="https://sdivyasravani.github.io/DailyNews/" code="https://github.com/SDivyaSravani/DailyNews" main="Developed a news website that dynamically fetches and displays the latest headlines using a news API, with a user-friendly and responsive design." banner={news} />
            <ProjectCard title="Spotify" Demo="https://sdivyasravani.github.io/Music/" code="https://github.com/SDivyaSravani/Music" main="Developed a Spotify clone using React, Vite, and Tailwind CSS with a responsive layout.It replicates Spotify’s design to showcase modern UI and frontend development skills." banner={music} />
        </div>
    </div>
  )
}

export default Projects;