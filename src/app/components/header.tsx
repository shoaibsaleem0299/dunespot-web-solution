import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='absolute top-0 w-full z-10 py-4 px-10 flex justify-between items-center'>
      <div>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            width={150}
            height={150}
            alt='Dunespot'
          />
        </Link>
      </div>
      <nav>
        <ul className='flex'>
          <li className='px-4 py-2 font-semibold hover:text-white'><Link href='/'>Home</Link></li>
          <li className='px-4 py-2 font-semibold hover:text-white'><Link href='/'>About Us</Link></li>
          <li className='px-4 py-2 font-semibold hover:text-white'><Link href='/'>Pages</Link></li>
          <li className='px-4 py-2 font-semibold hover:text-white'><Link href='/'>Blogs</Link></li>
          <li className='px-4 py-2 font-semibold hover:text-white'><Link href='/'>Services</Link></li>
          <li className='px-4 py-2 font-semibold hover:text-white'><Link href='/'>Contact Us</Link></li>
          <li className='px-4 py-2 font-semibold '><Link href='/'>
            <i className="fa-solid fa-magnifying-glass text-black text-2xl px-2"></i>
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}
