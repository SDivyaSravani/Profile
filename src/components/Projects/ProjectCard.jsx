import React from 'react';

const ProjectCard = ({ title, main, banner, Demo, code }) => {
  return (
    <div className='w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md p-4 md:p-6 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl flex flex-col'>
      
      {/* Responsive margin-bottom: mb-0 for default, mb-10 only on lg+ */}
      <div className='h-40 mb-3 lg:mb-5'>
        <img className='p-4 rounded-3xl' src={banner} alt={title} />
      </div>

      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal mt-4'>
        {title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2 mt-4'>{main}</p>

      <div className='mt-2 px-4 pb-4 flex flex-wrap gap-3 justify-start'>
        <a href={Demo} target="_blank" rel="noopener noreferrer">
          <button className='text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] whitespace-nowrap'>
            Demo
          </button>
        </a>
        <a href={code} target="_blank" rel="noopener noreferrer">
          <button className='text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] whitespace-nowrap'>
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
