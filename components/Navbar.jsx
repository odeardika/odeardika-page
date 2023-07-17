'use client'
import {Fragment, React, useState} from 'react'
import Image from 'next/image'
import {Bars3Icon, ChevronDownIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, ArrowPathIcon} from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'

function Navbar() {
    // menu toggle status
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const products = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: 'Your customer`s data will be safe and secure', href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]
  return (
    <div>
        <header className='bg-white'>
            <nav className=' mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
                {/* navbar logo section */}
                <div className=' flex lg:flex-1'>
                    <a href='#' className=' -m-1.5 p-1.5'>
                        <span className=' sr-only'>ode logo</span>
                        <Image className=' h-8 w-auto ' src='/../public/assets/my_logo_reverse.png' width={100} height={10} />
                    </a>
                </div>
                <div className='flex lg:hidden'>
                    <button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700' 
                    onClick = {() => setMobileMenuOpen(true)}>
                        <span className='sr-only'>Open main menu</span>
                        {/* import form react heroicons module */}
                        <Bars3Icon className=' h-6 w-6' aria-hidden='true'/>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex">
                    <Popover className='relative'>
                        <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
                            Product
                            <ChevronDownIcon className='h-5 w-5 flex-none text-gray-400' aria-hidden = 'true'/>
                        </Popover.Button>
                        <Transition 
                        as={Fragment} 
                        enter='transition ease-out duration-200' 
                        enterFrom='opacity-0 translate-y-1' 
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                            {/* Drop down start here */}
                            <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                                <div className='p-4'>
                                    {products.map((item)=>{
                                        <div key={item.name} className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'> 
                                            <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                                                <item.icon />
                                            </div>
                                            <div>
                                                <a href={item.href} className=''>
                                                    {item.name}
                                                    <span />
                                                </a>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>
            </nav>
        </header>
    </div>
  )
}

export default Navbar