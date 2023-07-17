import React from 'react'
import InstagramIcon from './icons/Instagram'
import GithubIcon from './icons/Github'
import LinkendIcon from './icons/LinkendIcon'

const AboutPage = () => {
  return (
    <section id='about' className='pt-36 pb-32'>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className="w-full px-4 mb-10">
                    <h4 className='font-bolld uppercase text-primary text-lg mb-3'>About Me</h4>
                    <h2 className='font-bold text-dark text-3xl mb-5 max-w-md'>University Udayana</h2>
                    <p className='font-medium text-base text-secondary max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa iusto blanditiis praesentium. Iusto debitis modi, voluptates pariatur alias laboriosam tempora laudantium assumenda, excepturi eius consequuntur perferendis quisquam perspiciatis ullam.</p>
                </div>
                <div className='w-full px-4'>
                    <h3 className='font-semibold text-dark text-2xl mb-4'>Social Media</h3>
                    <p className='font-medium text-base text-secondary mb-6'>I have several social media to interact with me like Instagram, Github to see some of my projects and Linked to see my profile</p>
                    <div className='flex items-center'>
                        <InstagramIcon 
                        className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white' 
                        href={'https://www.instagram.com/odeardika/'}/>
                        <LinkendIcon 
                        className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white' 
                        href={'https://www.linkedin.com/in/putu-ode-irfan-ardika-178373275/'}/>
                        <GithubIcon 
                        className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white' 
                        href={'https://github.com/odeardika'}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage