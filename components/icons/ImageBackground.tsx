import React from 'react'

const ImageBackground = ({color}:any) => {
  return (
    <span className='absolute bottom-12 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
        <svg
        width='450' height='500' 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M20.5,-33.8C26.4,-23.8,31.2,-17.7,38.2,-9.3C45.2,-0.9,54.5,9.9,50.8,15.1C47.2,20.3,30.7,19.9,20,31C9.4,42.1,4.7,64.7,-3.4,69.4C-11.5,74.1,-23,60.8,-34.4,49.9C-45.8,39.1,-57.1,30.6,-53.8,21.9C-50.5,13.2,-32.5,4.2,-23.7,-2.9C-14.8,-10.1,-15,-15.5,-12.5,-26.6C-10.1,-37.7,-5.1,-54.6,1.1,-56.1C7.2,-57.7,14.5,-43.8,20.5,-33.8Z" transform="translate(100 100) scale(1.2)" />
        </svg>
    </span>
  )
}

export default ImageBackground