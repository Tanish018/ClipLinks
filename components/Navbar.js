import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-23 flex items-center justify-between bg-transparent text-black backdrop-blur-xl px-3'>
        <div className='text-[40px] font-bold ml-5 cursor-pointer'>
            <Link className='cursor-pointer' href="/">ClipLinks</Link>
        </div>
        <ul className='flex items-center text-[20px] gap-5 font-semibold'>
            <Link className='cursor-pointer' href="/">Home</Link>
            <Link className='cursor-pointer' href="/about">About</Link>
            <Link className='cursor-pointer' href="/shorten">Shorten</Link>
            <Link className='cursor-pointer' href="/contact">Contact Us</Link>
        </ul>
        <div className='flex items-center gap-3 mr-5 text-[20px]'>
            <Link href="/shorten"><button className='cursor-pointer px-5 py-2 rounded-2xl bg-black text-white hover:ring-2 hover:ring-black hover:bg-white hover:text-black transition-all duration-300 font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='cursor-pointer px-5 py-2 rounded-2xl bg-black text-white hover:ring-2 hover:ring-black hover:bg-white hover:text-black transition-all duration-300 font-bold'>Github</button></Link>
        </div>
    </nav>
  )
}

export default Navbar