import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import {useRouter} from 'next/router'
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const inputSearchRef = useRef(null);
    const router = useRouter();

    const search = (e) =>{

        e.preventDefault();
        const term = inputSearchRef.current.value;

        if(!term)return;

        router.push(`/search?term=${term}`)

    }

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex items-center w-full p-6'>
        <Image
              src= "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              height = {40}
              width = {120}
              className="cursor-pointer"
              onClick={()=>{
                router.push('/')
              }}
        />
        <form className='flex flex-grow px-5 py-3 rounded-full shadow-lg border border-gray-200 max-w-3xl mr-5 items-center ml-5'>
            <input type = "text" ref = {inputSearchRef} 
            className ="flex-grow w-full outline-none"
            />
            <XIcon  className='h-7 text-gray-500 mr-3 cursor-pointer transition-duration-100 transform hover:scale-125'
             onClick = {()=>(inputSearchRef.current.value = "")}
            />
            <MicrophoneIcon  className='h-6 mr-3 hidden sm:inline-block text-blue-600 border-l-2 pl-4 border-gray-300'/>

            <SearchIcon className = "h-6 text-blue-600 hidden sm:inline-flex" />
            <button hidden type = "submit" onClick={search}>search</button>
        </form>
        <Avatar className = "ml-auto" url = '/rahulyadav.jpg'/>
        </div>
        <HeaderOptions />
    </header>
  )
}

export default Header