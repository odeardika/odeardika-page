import { headers } from 'next/dist/client/components/headers'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className='container'>
            <div className='flex items-center justify-between relative'>
                <div className='px-4'>
                    <a href="#home" className='font-bold text-lg text-primary block py-6'>odeardika</a>
                </div>
                <div className='flex items-center px-4'>
                    <button id='hamburger' name='hamburger' type='button' className='block absolute right-4'>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header