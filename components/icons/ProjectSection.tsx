import React from 'react'
import Image from 'next/image'
import Icon  from './Icon'

const ProjectSection = ({imageSource, projectName , projectDesc, toolIcon , imageAlt} : any) => {
  return (
    <div>
        <div className=' rounded-md shadow-md overflow-hidden'>
            <Image src={imageSource} alt={imageAlt} width={600} height={400} />
        </div>
        <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>{projectName}</h3>
        <div className="flex items-center mb-3">
        {toolIcon.map((item : any) => <div key={`${item.key}`} className='flex'>
          {item.component.map((icon : any) => <div key={`${icon} in ${item.key}`}><Icon key={`${icon} in ${item.key}`} className='icon' iconName={icon}/></div>)}
        </div>)}
        </div>
        <p className='font-medium text-base text-secondary '>{projectDesc}</p>
    </div>
  )
}

export default ProjectSection