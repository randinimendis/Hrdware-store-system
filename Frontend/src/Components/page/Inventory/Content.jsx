import React from 'react'
import './content.css'
import { Link } from 'react-router-dom'

export default function Content({text,route}) {
  return (
 
    <div className=''>
      <div class="flex flex-row gap-2 items-center justify-center m-10 text-3xl"> 
        <Link to={route}>
          <button type="button" class="w-xdl text-3xl w-80 h-40 inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2  bg-blue-700
            font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out
          hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100
            focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200
            active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light">
              {text}</button></Link>
        </div>
    </div>
  )
}
