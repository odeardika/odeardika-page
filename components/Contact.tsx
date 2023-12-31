import React from 'react'

interface contactProperty{
    email : string
}

const Contact = (prop: contactProperty) =>{
  return (
    <section id='contact' className='pt-36 pb-32 '>
        <div className='container'>
            <div className='max-w-xl mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-primary mb-2'>Contact</h4>
                <h2 className='font-bold text-dark text-2xl mb-4 sm:text-3xl lg:text-4xl'>Contact me at <span>{prop.email}</span></h2>
                <p className='font-medium text-md text-secondary md:text-lg'>How can i help you? Have a project you would like to talk about? Send me a message down here. </p>
            </div>
        </div>
        <form>
            <div className='w-full lg:w-2/3 mx-auto'>
                <div className='w-full px-4 mb-8'>
                    <label className='text-base font-bold text-primary'>Name</label>
                    <input type="text" id='name' className='w-full mt-2 bg-slate-200 text-dark p-3 rounded-sm focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />    
                </div>
                <div className='w-full px-4 mb-8'>
                    <label className='text-base font-bold text-primary'>Email</label>
                    <input type="email" id='email' className='w-full mt-2 bg-slate-200 text-dark p-3 rounded-sm focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
                </div>
                <div className='w-full px-4 mb-8'>
                    <label className='text-base font-bold text-primary'>Massage</label>
                    <textarea id='massage' className='w-full mt-2 bg-slate-200 text-dark p-3 rounded-sm h-32 resize-none focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
                </div>
                <div className='w-full'>
                    <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>Send</button>
                </div>
            </div>
        </form>
        
    </section>
  )
}

export default Contact