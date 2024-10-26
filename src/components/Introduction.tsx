import React from 'react';
import CustomButton from './Button';
import Link from 'next/link';

export default function Introduction() {
  return (
    <>
      {/* Section 01 */}

      {/* Beautiful Blog Heading */}
      <section className="w-full py-12 text-center">
        <h1 className="relative text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400 drop-shadow-lg">
          BLOG
          {/* Triple underline */}
          <span className="absolute inset-x-0 bottom-0 flex flex-col items-center"></span>
        </h1>
      </section>

      <section className='w-[90%] mt-2 mx-auto flex flex-col md:flex-row gap-24 px-4'>
        <div className='w-full order-2 md:order-1 mt-48 md:mb-0 md:w-[50%] md:mt-10'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-1'>Overview of Next.js</h2>
          <hr className='w-[150px] h-[4px] bg-[#ccc]' />
          <p className='mt-5 text-sm md:text-base'>
            Next.js is a React framework that improves web development with server-side rendering (SSR) and static site generation (SSG).
            In Next.js 13, React Server Components enhanced SSR performance, while Next.js 14 introduced faster builds and improved routing.
            Next.js 15 added better streaming and image optimization, resulting in quicker page loads. These updates consistently enhance development speed and user experience.
          </p>
          <div className='mt-5'>
            <Link href="/blog/nextjsblog">
              <CustomButton />
            </Link>
          </div>
        </div>
        <div className="w-full order-1 md:order-2 relative inline-block -mt-40 md:-mt-24 md:w-[30%]">
          <div 
            className="text-[180px] md:text-[320px] font-bold text-transparent text-stroke absolute top-16 md:top-0 md:left-0 z-10 bg-center bg-clip-text bg-cover"
            style={{ backgroundImage: 'url(/images/nextjs.png)' }}
          >
            01 
          </div>
        </div>
      </section>
      <hr className='w-[80%] h-[4px] bg-[#ccc] sm:mb-5 mx-auto mt-20' /> {/* Horizontal line for Section 01 */}

      {/* Section 02 */}
      <section className='w-[90%] mt-20 mx-auto flex flex-col md:flex-row gap-48 px-4'>
        <div className="relative inline-block -mt-10 md:-mt-24 w-[30%]">
          <div 
            className="text-[180px] md:text-[320px] font-bold text-transparent text-stroke absolute top-0 left-0 z-10 bg-top bg-clip-text bg-cover"
            style={{ backgroundImage: 'url(/images/fbb.png)' }}
          >
            02
          </div>
        </div>
        <div className='w-full md:w-[50%] mt-10'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-1'>Overview of React.js</h2>
          <hr className='w-[150px] h-[4px] bg-[#ccc]' />
          <p className='mt-5 text-sm md:text-base'>
            React simplifies UI building with its component-based approach, ideal for creating dynamic, fast interfaces.
          </p>
          <div className='mt-5'>
            <Link href="/blog/reactjsblog">
              <CustomButton />
            </Link>
          </div>
        </div>
      </section>
      <hr className='w-[80%] h-[4px] bg-[#ccc] mb-5 mx-auto mt-20' /> {/* Horizontal line for Section 01 */}

      {/* Section 03 - Next.js 15 */}
      <section className='w-[80%] mt-20 mx-auto flex flex-col md:flex-row gap-24 px-4'>
        <div className='w-full mt-40 md:w-[50%] md:mt-10'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-1'>Angular vs Vue.js</h2>
          <hr className='w-[150px] h-[4px] bg-[#ccc]' />
          <p className='mt-5 text-sm md:text-base'>
            Angular offers a full-featured framework for robust apps, while Vue.js provides flexibility for lightweight applications.
          </p>
          <div className='mt-5'>
            <Link href="/blog/angvue">
              <CustomButton />
            </Link>
          </div>
        </div>
        <div className="relative inline-block -mt-10 md:-mt-24 w-[30%]">
          <div 
            className="text-[180px] md:text-[320px] font-bold text-transparent text-stroke absolute bottom-64 md:-bottom-24 z-10 bg-top bg-clip-text bg-cover"
            style={{ backgroundImage: 'url(/images/pe.jpg)' }}
          >
            03
          </div>
        </div>
      </section>
      <hr className='w-[80%] h-[4px] mb-5 bg-[#ccc] mx-auto mt-20' /> {/* Horizontal line for Section 01 */}

      {/* Section 04 - Tailwind CSS */}
      <section className='w-[90%] mt-20 mx-auto flex flex-col md:flex-row gap-48 px-4'>
        <div className="relative inline-block -mt-10 md:-mt-24 w-[30%]">
          <div 
            className="text-[180px] md:text-[320px] font-bold text-transparent text-stroke absolute top-0 left-0 z-10 bg-center bg-clip-text bg-cover mx-auto"
            style={{ backgroundImage: 'url(/images/csss.jpg)' }}
          >
            04
          </div>
        </div>
        <div className='w-full md:w-[50%] mt-10'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-1'>Tailwind CSS: Utility-First Design</h2>
          <hr className='w-[150px] h-[4px] bg-[#ccc]' />
          <p className='mt-5 text-sm md:text-base mb-5'>
            Tailwind CSS is a utility-first CSS framework that allows developers to create highly customizable and responsive designs without writing traditional CSS. Its design philosophy revolves around using small, reusable classes to build complex interfaces, making the development process faster and more efficient.
          </p>
          <div className='mt-5'>
            <Link href="/blog/tailwindcss">
              <CustomButton />
            </Link>
          </div>
        </div>
      </section>
      <hr className='w-[80%] h-[4px] sm:mb-36 mt-5 bg-[#ccc] mx-auto ' /> {/* Horizontal line for Section 01 */}

      {/* Section 05 - ShadCN */}
      <section className='w-[90%] mt-20 mx-auto flex flex-col md:flex-row gap-24 px-4'>
        <div className='w-full mt-40 md:w-[50%] md:mt-10'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-1'>Beginner&apos;s Guide to Modern TypeScript</h2>
          <hr className='w-[150px] h-[4px] bg-[#ccc]' />
          <p className='mt-5 text-sm -mb-10 md-mb-0 md:text-base'>
            TypeScript adds static typing to JavaScript, making code more readable and reducing runtime errors.
          </p>
          <div className='mt-12'>
            <Link href="/blog/tsblog">
              <CustomButton />
            </Link>
          </div>
        </div>
        <div className="relative inline-block -mt-10 md:-mt-24 w-[30%]">
          <div 
            className="text-[180px] md:text-[320px] font-bold text-transparent text-stroke absolute bottom-64 md:-bottom-32 z-10 bg-center bg-clip-text bg-cover"
            style={{ backgroundImage: 'url(/images/tss2.jpg)' }}
          >
            05
          </div>
        </div>
      </section>
      <hr className='w-[80%] h-[4px] bg-[#ccc] mx-auto mb-5 mt-20' /> {/* Horizontal line for Section 01 */}

      {/* Section 06 - Next.js 15 Enhancements */}
      <section className='w-[90%] mt-20 mx-auto flex flex-col md:flex-row gap-48 px-4'>
        <div className="relative inline-block -mt-10 md:-mt-24 w-[30%]">
          <div 
            className="text-[180px] md:text-[320px] font-bold text-transparent text-stroke absolute top-0 left-0 z-10 bg-top bg-clip-text bg-cover"
            style={{ backgroundImage: 'url(/images/pyyy.jpg)' }}
          >
            06
          </div>
        </div>
        <div className='w-full md:w-[50%] mt-10'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-1'>Modern Python</h2>
          <hr className='w-[150px] h-[4px] bg-[#ccc]' />
          <p className='mt-5 text-sm md:text-base'>
          Modern Python offers powerful libraries for data science, web development, and artificial intelligence, making it one of the most versatile languages.
          </p>
          <div className='mt-5 mb-5'>
        <Link href="/blog/pythonblog">
        <CustomButton  />
        </Link>
         </div>
        </div>
      </section>
    </>
  );
}
