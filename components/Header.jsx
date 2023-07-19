'use client'

import { headers } from 'next/dist/client/components/headers'
import React, { useState } from 'react'

const Header = () => {
    // detect scroll
    const [isScrool, setIsScrool] = useState(false)
    // toggle for hamburger button active or not
    const [isActive, setIsActive] = useState(false)

    window.onscroll = () =>{
        const header = document.querySelector('header')
        // position of header from top of the page
        const fixedNavbar = header.offsetTop

        if(window.scrollY > fixedNavbar){
            setIsScrool(true)
        }else{
            setIsScrool(false)
        }
    }
  return (
    <header className={`${isScrool? 'navbar-fixed':''} bg-transparent absolute top-0 left-0 w-full flex items-center z-10`}>
        <div className='container'>
            <div className='flex items-center justify-between relative'>
                <div className='px-4'>
                    <a href="#home" className='font-bold text-lg text-primary block py-6'>odeardika</a>
                </div>
                <div className='flex items-center px-4'>
                    <button 
                    id={isActive ? 'hamburger-active':'hamburger'}
                    name='hamburger' 
                    type='button' 
                    className='block absolute right-4 lg:hidden'
                    onClick={()=>{setIsActive(!isActive)}}>
                        <span className='hamburger-line origin-bottom-left'></span>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line origin-bottom-left'></span>
                    </button>
                    <nav id='nav-menu' className={`${isActive ? '':'hidden'} absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                        <ul className='block lg:flex'>
                            <li className='group'>
                                <a 
                                href="#home" 
                                className=' text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Home</a>    
                            </li>
                            <li className='group'>
                                <a 
                                href="#about" 
                                className=' text-base text-dark py-2 mx-8 flex group-hover:text-primary'>About Me</a>
                            </li>
                            <li className='group'>
                                <a 
                                href="#portfolio" 
                                className=' text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Portfolio</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header