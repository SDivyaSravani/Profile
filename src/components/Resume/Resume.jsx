import React from 'react'

const Resume = () => {
  return (
    <div className='text-white p-10 md:p-24' id="Resume">
      <h3 className='text-2xl md:text-4xl text-white font-bold mb-2'>Resume</h3>
      <div className='flex justify-center mt-4'>
        <a className='hover:cursor-pointer md:mt-10 mx-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' href="https://drive.google.com/file/d/1NHkkpG8O4JfSa0L1NWG8Kidd_xTaGbts/view?usp=sharing" target="_blank">View</a>
        <a className='hover:cursor-pointer md:mt-10 mx-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' href="https://drive.google.com/file/d/1NHkkpG8O4JfSa0L1NWG8Kidd_xTaGbts/view?usp=sharing" download>Download</a>
      </div>
    </div>

  )
}

export default Resume