import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {ViewGridIcon,MicrophoneIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null)

  const search = (e) =>{
    e.preventDefault();

    const term = searchInputRef.current.value;
    if(!term)return;
    
    router.push(`/search?term=${term}`);
    
  }
  return (
    <div className = "flex flex-col items-center justify-between h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header className = "flex w-full p-3 justify-between text-sm text-gray-700 mb-5">
          <div className = "flex space-x-4 items-center">
            <p className='link'>About</p>
            <p className='link'>Store</p>
          </div>

          <div className =  "space-x-4 flex items-center">
            <p className='link'>Gmail</p>
            <p className='link'>Images</p>
             
             <ViewGridIcon className = "h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
            <Avatar  url = "/rahulyadav.jpg" />
          </div>
        </header>
        {/* <Body /> */}
        <form className = "flex flex-col items-center justify-center mt-34 w-4/5">

        <Image src = "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
         height = {100}
         width = {300}
        
        />
         <div className = "flex w-full mt-4 hover:shadow-lg max-w-md focus-within:shadow-lg border border-gray-200 rounded-full px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl flex-grow">
          <SearchIcon className = 'h-5 mr-5 text-gray-500' />
          <input ref = {searchInputRef} type = "text" className = " focus:outline-none flex-grow "  placeholder='Rahul Yadav'/>
          <MicrophoneIcon className = "h-8 fill-blue-500" />
         </div>
         <div className = "flex flex-col space-y-2 w-1/2 justify-center mt-5 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button className='btn' onClick = {search}>Google Search</button>
          <button className='btn' onClick = {search}>I'm feeling lucky</button>
         </div>
      </form>

        <Footer />
       
    </div>
  )
}
