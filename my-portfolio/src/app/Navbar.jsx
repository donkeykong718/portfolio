'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
   }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image
          src="/assets/navigating.png"
          alt="navigating"
          width='125'
          height='150'
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/story'>
              <li className='ml-10 text-sm uppercase hover:border-b'>My Story</li>
              </Link>
            <Link href='/projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/resume'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
            </Link>
            <Link href='/contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav}  className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className=
          {nav ?
            'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500' }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/assets/navigating.png' alt='navigating' width='87' height='35' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together.</p>
            </div>
          </div>
          <div className='py4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/story'>
                <li className='py-4 text-sm'>My Story</li>
              </Link>
              <Link href='/projects'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/resume'>
                <li className='py-4 text-sm'>Resume</li>
              </Link>
              <Link href='/contact'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>  
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedin />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}