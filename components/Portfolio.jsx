import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <section id='portfolio' className='pt-36 pb-32'>
        <div className='container'>
            <div className='w-full px-4'>
                <div className=' max-w-xl mx-auto text-center mb-16'>
                    <h4>Portfolio</h4>
                    <h2>Project 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officia officiis dicta deserunt quibusdam? Repellendus obcaecati rerum tenetur! Vel, fuga est maiores ipsum porro molestiae quis quidem iure nobis sed.</p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-wrap justify-center'>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className=' rounded-md shadow-md overflow-hidden'>
                        <Image src='/../public/assets/portfolio/klasifikasi_review.png' width={600} height={400} className='w-full'/>
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