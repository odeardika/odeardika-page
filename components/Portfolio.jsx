import React from 'react'
import ProjectSection from './icons/ProjectSection'
import Image from 'next/image'
import PythonIcon from './icons/PythonIcon'
import StreamlitIcon from './icons/StreamlitIcon'
import PHPIcon from './icons/PHPIcon'
import BootstrapIcon from './icons/BootstrapIcon'

const Portfolio = () => {
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
                    other needs. To see all the projects can be seen on my <a href="" className='text-primary hover:opacity-70'>github</a>.</p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-wrap justify-center'>
                <ProjectSection 
                imageSource='/../public/assets/portfolio/klasifikasi_review.png'
                projectName='Review Checker'
                projectDesc='Web application to classify a positive or negative review. This application uses the Naive Bayes multinomial algorithm for classifying review text. The tool we use is the Python programming language with the stremlit framework as the frontend'
                toolIcon={[<PythonIcon className='icon'/>,<StreamlitIcon className='icon' />]}/>
                <ProjectSection 
                imageSource='/../public/assets/portfolio/wisata_finder.png'
                projectName='Wisata Finder'
                projectDesc='
                Web application to help find tourist attractions. 
                We created this application to help spread tourist attractions in Bali. 
                We are using PHP programming language with bootstrap framework for the frontend'
                toolIcon={[<PHPIcon className='icon'/>,<BootstrapIcon className='icon' />]}/>
                
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className=' rounded-md shadow-md overflow-hidden'>
                        <Image src='/../public/assets/portfolio/klasifikasi_review.png' width={600} height={400}/>
                    </div>
                    <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Review Checker</h3>
                    <p className='font-medium text-base text-secondary '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eligendi illo ducimus ut et tempora, in nam temporibus, praesentium fuga quam ipsa, debitis consequatur dolor provident officia quae porro eaque.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio