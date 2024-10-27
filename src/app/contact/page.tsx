'use client';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // Form ka reference

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Default form submission ko rokna

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then((result) => {
        alert("Thank you for contacting me! I will get back to you soon.");
        window.location.href = 'https://tysm-iota.vercel.app/'; // Confirmation page URL
      }, (error) => {
        alert("Failed to send message. Please try again.");
        console.error("Error sending message:", error);
      });

      e.currentTarget.reset(); // Form ko reset karna
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <div className='flex-grow flex items-center justify-center py-10'>
        <div className='w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-center text-purple-600 mb-6'>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type='text'
                id='name'
                name='from_name'
                className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-600 focus:border-purple-600'
                placeholder='Your Name'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                type='email'
                id='email'
                name='email_id'
                className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-600 focus:border-purple-600'
                placeholder='Your Email'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                name='message'
                className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-600 focus:border-purple-600'
                placeholder='Your Message'
                required
              />
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
