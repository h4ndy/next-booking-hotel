import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navlink from '@/components/navbar/navlink';

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full bg-white shadow-sm z-20'>
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center p-4">
       
               <Link href={"/"}>
                    <Image src="/logo.png" width={120} height={40} alt="logo" priority></Image> 
               </Link>
               <Navlink />
            
              
        </div>
    </div>

  )
}

export default Navbar