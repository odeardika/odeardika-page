import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id='home' className='pt-36'>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className='w-full self-center px-4 lg:w-1/2'>
                    <div className='w-fit'>
                        <h1 className=' animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary font-bold text-base text-primary md:text-xl'>Wellcome to my page</h1>
                    </div>
                    <h2 className='block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl'>Ode Ardika</h2>
                    <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'><span className='text-dark'>Junior Software Developer</span></h2>
                    <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio, veritatis mollitia in error expedita recusandae! Officiis assumenda ipsum libero deserunt non ab eveniet doloribus repellat. Eum ab debitis cupiditate.</p>
                    <a className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-80 transition duration-300 ease-in-out' href="#contact">Contact Me</a>
                </div>
                <div className='w-full self-end px-4 lg:w-1/2'>
                    <div className='relative mt-10 lg:mt-9 lg:right-0'>
                        <Image src='/../public/assets/my_pict.png' alt='Foto Ode' width={400} height={400} className='max-w-full mx-auto'/>
                        <span className='absolute bottom-12 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                            <svg
                            width='450' height='500' 
                            viewBox="0 0 200 200" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path fill="#34b3f2" d="M20.5,-33.8C26.4,-23.8,31.2,-17.7,38.2,-9.3C45.2,-0.9,54.5,9.9,50.8,15.1C47.2,20.3,30.7,19.9,20,31C9.4,42.1,4.7,64.7,-3.4,69.4C-11.5,74.1,-23,60.8,-34.4,49.9C-45.8,39.1,-57.1,30.6,-53.8,21.9C-50.5,13.2,-32.5,4.2,-23.7,-2.9C-14.8,-10.1,-15,-15.5,-12.5,-26.6C-10.1,-37.7,-5.1,-54.6,1.1,-56.1C7.2,-57.7,14.5,-43.8,20.5,-33.8Z" transform="translate(100 100) scale(1.2)" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero