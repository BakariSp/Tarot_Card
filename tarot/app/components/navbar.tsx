import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 mix-blend-multiply">
      <div className='navbar-start'>
      <Image className="mix-blend-multiply" src={'/icon.png'} alt="Icon Image" width="64" height="64" />
      </div>
      <div className='text-xl navbar-center font-semibold font-serif'><Link href='/'>Carot Card Game</Link></div>
      <div className='navbar-end'></div>
    </div>
  )
}

export default Navbar
