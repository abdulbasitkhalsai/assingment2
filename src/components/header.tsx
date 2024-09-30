import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='portfolio'>Portfolio</h1>
        <nav>
            <ul className='navbar'>
                <Link href={"/"} className='navLinks'>Home</Link>
                <Link href={"/projects"} className='navLinks'>Projects</Link>
                <Link href={"/services"} className='navLinks'>Services</Link>
                <Link href={"contact-us"} className='navLinks'>Contact Us</Link>
                <Link href={"/about"} className='navLinks'>About</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
