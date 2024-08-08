import React from 'react'

import proj1 from './assets/proj1.png';
import proj2 from './assets/proj2.png';
import proj3 from './assets/proj3.png';

export const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-col-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj1} alt='proj1' />
                <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Score Board</span>
                <div className='pt-8 text-center'>
                    <a href='/' target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Live</button> 
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj2} alt='proj1' />
                <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Fitnes Tracker</span>
                <div className='pt-8 text-center'>
                    <a href='/' target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Live</button> 
                    </a>
                </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj3} alt='proj1' />
                <div className='opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Book Review App</span>
                <div className='pt-8 text-center'>
                    <a href='https://mndraca.github.io/BookReview-/' target="_blank" rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Live</button> 
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
