import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id='home' className='pt-36'>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className='w-full self-center px-4 lg:w-1/2'>
                    <h1 className='text-base font-semibol text-primary md:text-xl ]'>Hello everyone, 
                    I am <span className='block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl'>Ode Ardika</span></h1>
                    <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'>I am <span className='text-dark'>Junior Software Developer</span></h2>
                    <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio, veritatis mollitia in error expedita recusandae! Officiis assumenda ipsum libero deserunt non ab eveniet doloribus repellat. Eum ab debitis cupiditate.</p>
                    <a className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-80 transition duration-300 ease-in-out' href="#">Contact Me</a>
                </div>
                <div className='w-full self-end px-4 lg:w-1/2'>
                    <div className='relative mt-10 lg:mt-9 lg:right-0'>
                        <Image src='/../public/assets/my_pict.png' width={400} height={400} className='max-w-full mx-auto'/>
                        <span className='absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                            <svg width='550' height='550' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#14b8a6" d="M53.1,-62.1C65.8,-52.6,71.1,-33,70.6,-15.5C70.2,2.1,63.9,17.7,54.1,28C44.3,38.3,31,43.3,19.6,42.5C8.3,41.7,-1,35,-11.6,31.3C-22.2,27.7,-34,27.1,-41.1,20.8C-48.1,14.6,-50.4,2.7,-52.5,-13.4C-54.7,-29.5,-56.7,-49.8,-48,-60C-39.2,-70.2,-19.6,-70.3,0.3,-70.6C20.2,-71,40.4,-71.6,53.1,-62.1Z" 
                                transform="translate(100 100) scale(1.1)"/>
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