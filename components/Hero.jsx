import React from 'react'
import Image from 'next/image'
import ImageBackground from './icons/ImageBackground'
import myPicture from 'public/assets/my_pict.png'

const Hero = () => {
  return (
    <section id='home' className='pt-36 pb-40 bg-gradient-to-r from-sky-200 to-sky-500'>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className='w-full self-center px-4 lg:w-1/2'>
                    <div className='w-fit'>
                        <h1 className=' animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-dark font-bold text-base text-dark md:text-xl'>Wellcome to my page</h1>
                    </div>
                    <h2 className='block font-bold text-sky-50 text-4xl mt-1 lg:text-5xl'><span className='font-semibold'>I am</span> Ode Ardika</h2>
                    <h2 className='font-medium text-white text-lg mb-3 lg:text-2xl'>a Junior Software Developer</h2>
                    <p className='font-medium text-dark mb-10 leading-relaxed'>
                    And an enthusiastic student deeply passionate about technology, 
                    particularly programming. My insatiable curiosity drives me to constantly explore new technologies, 
                    making sure I stay at the cutting edge of programming advancements. With a love for problem-solving 
                    and a keen eye for detail, I enjoy turning ideas into reality through elegant and efficient code.</p>
                    <a className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-80 transition duration-300 ease-in-out' href="#contact">Contact Me</a>
                </div>
                <div className='w-full self-end px-4 lg:w-1/2'>
                    <div className='relative mt-10 lg:mt-9 lg:right-0 border-sky-50 border-solid border-2 rounded-full w-fit lg:ml-32 bg-white'>
                        <Image src={myPicture} className='max-w-full mx-auto rounded-full'/>
                        {/* <Image src='/../public/assets/my_pict.png' alt='Foto Ode' width={400} height={400} className='max-w-full mx-auto rounded-full'/> */}
                        <ImageBackground color='#ffffff'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero