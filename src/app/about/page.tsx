import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-200'>
      <div className='flex-grow w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center py-10'>
        <div className='flex-1 relative mb-6 md:mb-0 md:mr-10'>
          <Image 
            src="/images/lap1.avif" 
            width={350} 
            height={350} 
            alt='img' 
            className='h-[250px] w-[200px] sm:h-[300px] sm:w-[250px] md:w-[350px] md:h-[350px] relative z-20 shadow-lg' 
          />
          <div className='w-[200px] sm:w-[250px] md:w-[320px] h-[250px] sm:h-[300px] md:h-[350px] border-[6px] sm:border-[8px] border-solid border-purple-600 absolute top-4 sm:top-5 left-4 sm:left-6 md:top-6 md:left-10' />
        </div>

        <div className='flex-1 text-center md:text-left'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-2 text-purple-500'>Hi!</h2>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>I am a Frontend Developer</h2>
          <p className='text-gray-700 text-sm sm:text-base mb-4'>
            My name is Ayesha, and I am proficient in HTML, CSS, JS, and TS. Currently, I am learning Next.js, React, Python, and AI agents 🤖. I am excited to gain knowledge in robotics 🤖 and explore various AI tools 🛠️. I believe that connecting with others 🤝 and sharing our experiences can significantly enhance our understanding and skills in this rapidly evolving field 🌟.
          </p>

          <div className='flex flex-row flex-wrap justify-center md:justify-start mb-4'>
            <div className='flex flex-col w-1/2 sm:w-1/3 mb-2'>
              <h3 className='font-bold'>Name:</h3>
              <p className='text-xs'>Ayesha Shakoor</p>
            </div>
            <div className='flex flex-col w-1/2 sm:w-1/3 mb-2'>
              <h3 className='font-bold'>Email:</h3>
              <p className='text-xs'>ashii14245@gmail.com</p>
            </div>
            <div className='flex flex-col w-1/2 sm:w-1/3 mb-2'>
              <h3 className='font-bold'>Age:</h3>
              <p className='text-xs'>17</p>
            </div>
            <div className='flex flex-col w-1/2 sm:w-1/3 mb-2'>
              <h3 className='font-bold'>Phone:</h3>
              <p className='text-xs'>+3192957309</p>
            </div>
            <div className='flex flex-col w-1/2 sm:w-1/3 mb-2'>
              <h3 className='font-bold'>Job:</h3>
              <p className='text-xs'>Frontend Developer</p>
            </div>
            <div className='flex flex-col w-1/2 sm:w-1/3 mb-2'>
              <h3 className='font-bold'>From:</h3>
              <p className='text-xs'>Pakistan</p>
            </div>
          </div>
          
          <div className='flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4'>
            <Link href="https://ashumilestone12.vercel.app/">
              <button className='bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-300'>
                My Resume
              </button>
            </Link>
            <button className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-300'>
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
