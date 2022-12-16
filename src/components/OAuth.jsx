import React from 'react'
import{ FcGoogle } from 'react-icons/fc'

function OAuth() {
  return (
    <button
    className='flex items-center justify-center
    w-full bg-red-700
     text-white px-7 py-3 text-sm 
    font-medium uppercase rounded 
    shadow-md hover:bg-red-800 
    transition duration-150
    ease-in-out hover:shadow-lg 
     active:bg-red-900'>
     <FcGoogle
     className='text-2xl bg-white 
     rounded-full mr-2' />
        continue with google
    </button>
  )
}

export default OAuth