import React from 'react'
import ProjectSection from './icons/ProjectSection'
import clasification from 'public/assets/portfolio/klasifikasi_review.png'
import schedule from 'public/assets/portfolio/Penjadwalan.png'
import wifi from 'public/assets/portfolio/wisata_finder.png'

const Portfolio = () => {
    const listProject = [
        {imageSource : clasification, projectName : 'Review Checker', ImageAlt : 'Picture of review checker website', projectDesc:'Web application to classify a positive or negative review. This application uses the Naive Bayes multinomial algorithm for classifying review text. The tool we use is the Python programming language with the stremlit framework as the frontend',toolIcon: [{ key: 'wifi-py',component: ['python','streamlit']}]},
        {imageSource:wifi, projectName:'Wisata Finder', imageAlt:'Picture of wisata finder website', projectDesc:'Website to help find tourist attractions. We created this application to help spread tourist attractions in Bali. I act as a backend in making this application using PHP programming language and MYSQL database', toolIcon:[{ key: 'wifi-php',component: ['php', 'mysql']}]},
        {imageSource:schedule, key:'penjadwalan', projectName:'Informatics Scheduling System', imageAlt:'Picture of informatics scheduling system website', projectDesc:'Website to view class schedules at informatics campus. We created this application to help lecturers and students determine class schedules so they don`t collide with each other. I act as a backend in making this application using PHP programming language and MYSQL database', toolIcon:[{ key: 'jadwal-php',component: ['php', 'mysql']}]},
    ]
  return (
    <section id='portfolio' className='pt-36 pb-32 bg-slate-100'>
        <div className='container'>
            <div className='w-full px-4'>
                <div className=' max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-semibold text-lg text-primary mb-2'>Portfolio</h4>
                    <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>Recent Project</h2>
                    <p className='font-medium text-md text-secondary md:text-lg'>
                    Below are some of the projects I recently completed. 
                    These projects come from school assignments, competitions, 
                    other needs. To see all the projects can be seen on my <a href="https://github.com/odeardika" target='_blank' className='text-primary hover:opacity-70'>github</a>.</p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-wrap justify-center'>
                {listProject.map((project : any)=>
                    <div className={`mb-12 p-4 md:w-1/2`} key={project.projectName}><ProjectSection key={project.projectName} imageSource={project.imageSource} projectName={project.projectName} imageAlt={project.ImageAlt} projectDesc={project.projectDesc} toolIcon={project.toolIcon}/></div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Portfolio