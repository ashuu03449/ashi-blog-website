// components/CustomButton.js
"use client"; // Necessary for client-side rendering in Next.js 14

import React from 'react';

const CustomButton = () => {
  return (
    <button className="flex items-center justify-center px-6 py-2 text-lg font-bold text-white bg-purple-600 border border-transparent rounded-full transition-all duration-200 hover:bg-purple-700 active:scale-95">
      <span>Learn More</span>
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
    </button>
  );
};

export default CustomButton;
