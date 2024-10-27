"use client";

import Link from 'next/link';

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="mb-8">Your message has been successfully sent. We will contact you soon.</p>
      <Link href="/" className="bg-white text-purple-600 px-6 py-2 rounded-md hover:bg-gray-200 transition duration-300">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
