import React from 'react';

export default function Contact() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <div className='flex-grow flex items-center justify-center py-10'>
        <div className='w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-center text-purple-600 mb-6'>Contact Us</h2>
          <form action="https://formsubmit.co/ashii14245@gmail.com" method="POST" className='flex flex-col space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
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
                 name='email'
                className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-purple-600 focus:border-purple-600'
                placeholder='Your Email'
                required
              />
              <input type="hidden" name="_next" value="https://tysm-iota.vercel.app/" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I appreciate your message. If you have any questions or need assistance, please feel free to ask. I'll get back to you as soon as possible!" />






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
