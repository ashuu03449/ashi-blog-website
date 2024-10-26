"use client"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Container for background image */}
      <div className="relative w-full h-[90vh]  md:mb-0 md:h-[90vh] overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: `url('/lap-era.jpg')` }}> {/* Common Background Image */}
        

        {/* Background image within the container */}
        <div className="absolute inset-0">
          <Image
            src="/images/lap.jpg" // Ensure this is in the public folder
            alt="Background Image"
            layout="fill" // 'fill' ensures it covers the parent div
            style={{ objectFit: "cover" }} // objectFit used to cover the image
          />
        </div>

        {/* Black overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content container */}
        <div className="relative mb-20 mt-10   mx-auto z-10 w-[90%] md:w-[80%] h-full flex flex-col justify-center items-center px-5 md:px-0">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
            Welcome to my Blog!
          </h1>
          <p className="text-white text-sm mb-28 md:mb-0 md:text-lg mt-3 text-center">
          In this blog, we will discuss Next.js, React.js, Tailwind CSS, asynchronous programming, TypeScript (TS), and JavaScript (JS), along with other modern web development concepts. We will explore the latest improvements in these technologies in detail, enabling you to better understand and implement them in your projects. Additionally, in this blog, we will discuss web development-related languages and delve into modern web development practices.
          </p>
       <Link href="/blog">
       <button className="flex items-center justify-center mt-3 px-6 py-2 text-lg font-bold text-white bg-purple-600 border border-transparent transition-all duration-200 hover:bg-purple-700 active:scale-95">
      <span>Get Started</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 74 74"
        height="34"
        width="34"
        className="ml-2 transition-transform duration-300 ease-in-out hover:translate-x-1"
      >
        <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37" />
        <path
          fill="white"
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
        />
      </svg>
    </button></Link>
        </div>
      </div>

    </main>
  );
}
