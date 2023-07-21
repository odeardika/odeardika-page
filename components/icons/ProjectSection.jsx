import React from 'react'
import Image from 'next/image'

const ProjectSection = ({imageSource, projectName , projectDesc, toolIcon , imageAlt}) => {
  return (
    <div className='mb-12 p-4 md:w-1/2'>
        <div className=' rounded-md shadow-md overflow-hidden'>
            <Image src={imageSource} alt={imageAlt} width={600} height={400} />
        </div>
        <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>{projectName}</h3>
        <div className="flex items-center mb-3">
        {toolIcon.map(component => component)}
        </div>
        <p className='font-medium text-base text-secondary '>{projectDesc}</p>
    </div>
  )
}

export default ProjectSection