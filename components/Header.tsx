'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
    // detect scroll
    const [isScrool, setIsScrool] = useState(false)
    // toggle for hamburger button active or not
    const [isActive, setIsActive] = useState(false)
    // detect windows size
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=>{
        // check if the page is scrolling down
        window.addEventListener('scroll',()=>{
            const headerPosition = document.querySelector('header')?.offsetTop
            
            if(headerPosition === undefined){
                console.log('header element is undefined')
                return 0
            }else{
                setIsScrool(window.scrollY > headerPosition)
            }
        })
        //check if the page size is mobile size
        window.addEventListener('resize',()=>{
            setIsMobile(window.innerWidth < 1023)
        })

    })
    
    return (
    <header className={`${isScrool? 'navbar-fixed bg-transparent':''} absolute top-0 left-0 w-full flex items-center z-h-4 w-410 transition-all duration-200`}>
        <div className='container'>
            <div className='flex items-center justify-between relative'>
                <div className='px-4'>
                    <a href="#home" className={`font-bold text-lg block py-6 ${isScrool? 'text-primary':'text-white'}`}>odeardika</a>
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
                    <nav id='nav-menu' className={`${isActive ? '':'hidden'} bg-white absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                        <ul className='block lg:flex'>
                            <li className='group'>
                                <a 
                                href="#home" 
                                className={`text-base text-dark pt-2 pb-1 mx-8 flex group-hover:text-primary group-hover:border-b-2 border-primary transition-all duration-100 ${isMobile? `w-fit`:`${isScrool ? '':'group-hover:text-white border-white'}`}`}>Home</a>    
                            </li>
                            <li className='group'>
                                <a 
                                href="#about" 
                                className={`text-base text-dark pt-2 pb-1 mx-8 flex group-hover:text-primary group-hover:border-b-2 border-primary transition-all duration-100 ${isMobile? `w-fit`:`${isScrool ? '':'group-hover:text-white border-white'}`}`}>About Me</a>
                            </li>
                            <li className='group'>
                                <a 
                                href="#portfolio" 
                                className={`text-base text-dark pt-2 pb-1 mx-8 flex group-hover:text-primary group-hover:border-b-2 border-primary transition-all duration-100 ${isMobile? `w-fit`:`${isScrool ? '':'group-hover:text-white border-white'}`}`}>Portfolio</a>
                            </li>
                            <li className='group'>
                                <a 
                                href="#contact" 
                                className={`text-base text-dark pt-2 pb-1 mx-8 flex group-hover:text-primary group-hover:border-b-2 border-primary transition-all duration-100 ${isMobile? `w-fit`:`${isScrool ? '':'group-hover:text-white border-white'}`}`}>Contact</a>
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