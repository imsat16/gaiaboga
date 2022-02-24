import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 bg-black text-white'>
      <div className='p-5'>
        <div className='flex justify-center pb-3'>
          <div className='px-5'>
            Facebook
          </div>
          <div className='px-5'>
            Twiter
          </div>
          <div className='px-5'>
            Instagram
          </div>
          <div className='px-5'>
            YouTube
          </div>
        </div>
      <div className='border-t-2 border-gray-700 pt-2'>
      </div>
      <div className='flex justify-center '>
        <div className='text-gray-600 text-center'>2022 - All Right Reserved. Designed and Developed by <Link href={'https://gaiaboga.com/'}> 
        <a className='text-yellow-800'>
            Gaiaboga.com
        </a>
        </Link></div>
        
      </div>
      </div>
    </div>
  )
}

export default Footer