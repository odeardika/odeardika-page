import React from 'react'
import HyperlinkIcon from './icons/HyperlinkIcon'

const AboutPage = () => {
    const socialMedia = [
        { iconName : 'instagram', href : 'https://www.instagram.com/odeardika/'},
        { iconName : 'linkedin', href : 'https://www.linkedin.com/in/putu-ode-irfan-ardika-178373275/'},
        { iconName : 'github', href : 'https://github.com/odeardika'},
    ]
  return (
    <section id='about' className='pt-36 pb-32 '>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className="w-full px-4 mb-10 lg:w-1/2">
                    <h4 className='font-bolld uppercase text-primary text-lg mb-3'>About Me</h4>
                    <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>University Udayana</h2>
                    <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa iusto blanditiis praesentium. Iusto debitis modi, voluptates pariatur alias laboriosam tempora laudantium assumenda, excepturi eius consequuntur perferendis quisquam perspiciatis ullam.</p>
                </div>
                <div className='w-full px-4 lg:w-1/2'>
                    <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>Social Media</h3>
                    <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>I have several social media to interact with me like Instagram, Github to see some of my projects and Linked to see my profile</p>
                    <div className='flex items-center'>
                        {socialMedia.map((icon : any)=><div key={icon.iconName}><HyperlinkIcon className='icon' iconName={icon.iconName} href={icon.href} key={icon.iconName}/></div>)}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage