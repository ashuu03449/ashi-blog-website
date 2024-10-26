import React from 'react'
import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full md:w-full h-auto bg-purple-700 py-5 md:py-5 md:px-20 items-center'>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
           <div>
            <h3 className='text-[#ccc]'>&copy; 2024 My Blog</h3>
            <p className='text-[#ccc]'>All Rights Reserved

</p>
            </div> 
            <div className='flex gap-5'>
<Link href="https://www.facebook.com/profile.php?id=61554724457744&mibextid=ZbWKwL">
<FaFacebook className='text-3xl text-white' />
</Link>
<Link href="https://www.instagram.com/ashu24415/profilecard/?igsh=MTh5NHY2MnVzYWllcA==">
<FaInstagram className='text-3xl text-white' /></Link>
<Link href="https://github.com/ashuu03449">
<FaGithub className='text-3xl text-white' />
</Link>

            </div>

        </div>
<p className='mt-3 text-center text-[#ccc] '>Designed by Ayesha Shakoor❤️</p>
    </div>
  )
}
