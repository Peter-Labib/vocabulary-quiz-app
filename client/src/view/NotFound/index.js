import React from 'react'
import notFound from '../../assets/img/not-found-page.jpg'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
        <img className='w-full h-full object-contain' src={notFound} alt='not found page' />
    </div>
  )
}

export default NotFound