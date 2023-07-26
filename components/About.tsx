import React from 'react'
import HyperlinkIcon from './icons/HyperlinkIcon'
import Icon from './icons/Icon'

const AboutPage = () => {
    const socialMedia = [
        { iconName : 'instagram', href : 'https://www.instagram.com/odeardika/'},
        { iconName : 'linkedin', href : 'https://www.linkedin.com/in/putu-ode-irfan-ardika-178373275/'},
        { iconName : 'github', href : 'https://github.com/odeardika'},
    ]
    const skill = [
        'javascript','node','typescript','react', 'nextjs',
        'html', 'css','tailwind', 
        'python','streamlit', 'jupyter' , 'django', 
        'php', 'laravel',
        'c' ,'mysql', 'figma' ,]
  return (
    <section id='about' className='pt-36 pb-32 '>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className="w-full px-4 mb-3 md:mb-10 lg:mb-10 lg:w-1/2">
                    <h4 className='font-bolld uppercase text-primary text-lg mb-3'>About Me</h4>
                    <h3 className='font-semibold text-dark text-2xl lg:text-3xl lg:pt-3'>Education</h3>
                    <p className='font-medium text-base mb-2 text-secondary max-w-xl lg:text-lg'>currently a student at Udayana University</p>
                    <h3 className='font-semibold text-dark text-2xl lg:text-3xl lg:pt-10'>Experience</h3>
                    <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>Intern at Taksu Tech company in bali</p>
                </div>
                <div className='w-full px-4 sm:px-0 lg:w-1/2'>
                    <h3 className='font-semibold text-dark text-2xl mb-2  pt-0 lg:text-3xl lg:pt-10'>Social Media</h3>
                    <p className='font-medium text-base text-secondary mb-4 lg:text-lg'>I have several social media to interact with me like Instagram, Github to see some of my projects and Linked to see my profile</p>
                    <div className='flex items-center mb-3 lg:mb-0'>
                        {socialMedia.map((icon : any)=><div key={icon.iconName}><HyperlinkIcon className='icon' iconName={icon.iconName} href={icon.href} key={icon.iconName}/></div>)}
                    </div>
                    <h3 className='font-semibold text-dark text-2xl mb-2 lg:text-3xl lg:pt-5'>Skill</h3>
                    <p className='font-medium text-base mb-3 text-secondary max-w-xl lg:text-lg'>Skills that I have mastered</p>
                    <div className=' inline-grid grid-cols-6 gap-2'>
                        {skill.map((icon : any)=><div key={icon}><Icon className='icon' iconName={icon} /></div>)}
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage