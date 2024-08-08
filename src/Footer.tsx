import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto'>
        <span className='primary-color'>M.Z</span>
        <p className='text-gray-600'>markozivkovic1982@gmail.com <br/> #webDev2024</p>
        <div className='flex space-x-4'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className='text-gray-600 hover:text-blue-600' />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-gray-600 hover:text-pink-600' />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='text-gray-600 hover:text-blue-400' />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className='text-gray-600 hover:text-blue-700' />
        </a>
      </div>
    </div>
  )
}
