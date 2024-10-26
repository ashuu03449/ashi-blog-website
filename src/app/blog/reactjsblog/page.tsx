"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const ReactBlog = () => {
  return (
    <>
      <Head>
        <title>Getting Started with React</title>
        <meta 
          name="description" 
          content="Learn the basics of React, its setup, and the new features introduced in React 19." 
        />
      </Head>

      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">
          Getting Started with React
        </h1>
        <p className="text-gray-400 mb-4 text-center">October 26, 2024</p>

        <Image 
          src="/images/react.avif" 
          alt="React Logo"
          width={700} 
          height={300} 
          className="rounded-lg mb-6 mx-auto"
        />

        <article className="mt-10 text-gray-700">
          <p className="text-lg mb-6 leading-7">
            React is a popular JavaScript library for building user interfaces, especially for single-page applications. 
            It helps developers create interactive UIs efficiently with a component-based approach. This blog will cover 
            the basics of getting started with React.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Why Choose React?</h3>
          <ul className="list-disc list-inside space-y-2 ml-6 mb-6">
            <li>Component-Based: Build encapsulated components to manage their own state.</li>
            <li>Virtual DOM: React updates the UI efficiently by comparing differences in the DOM.</li>
            <li>Unidirectional Data Flow: Keeps data predictable and manageable.</li>
            <li>Large Ecosystem: Supports libraries and tools like Redux and React Router.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Setting Up React</h3>
          <p className="mb-6">To create a new React project, you can use the following command:</p>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700 overflow-x-auto">
            npx create-react-app my-react-app
          </pre>

          <p className="mb-6">After creating the project, navigate to the project folder and start the development server:</p>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700 overflow-x-auto">
{`cd my-react-app
npm start`}
          </pre>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Understanding JSX</h3>
          <p className="mb-6">
            JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML elements in 
            your JavaScript code, making it easier to create React components. Here’s a simple example:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700 overflow-x-auto">
{`function MyComponent() {
  return <h1>Hello, world!</h1>;
}`}
          </pre>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Creating a Simple Component</h3>
          <p className="mb-6">
            Here’s how you can create a simple React component:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md mb-6 border-l-4 border-purple-600 text-sm text-gray-700 overflow-x-auto">
{`import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}`}
          </pre>
        </article>

        <div className="text-center mt-10">
          <Link href="/blog" className="text-purple-500 hover:text-purple-300 underline transition duration-200">
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactBlog;
