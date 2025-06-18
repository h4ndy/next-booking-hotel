"use client"
import {useState} from "react"
import {IoClose, IoMenu}  from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";

const Navlink = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="inline-flex items-center p-2 justify-center text-sm text-green-500 rounded-md md:hidden hover:bg-gray-100">
        {open ? <IoClose size={25} /> : <IoMenu size={25} />}
      </button>
      <div className={clsx("w-full md:block md:w-auto", {hidden: !open})}>
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 rounded-md bg-gray-50 md:flex-row md:items-center md:space-x-8 md:mt-0 md:p-0 md:border-0 md:bg-white">
          <li>
            <Link href={"/"} className="block py-2 pl-3 pr-4 text-gray-800 hover:bg-gray-100 rounded-sm md;hover:bg-transparent md:hover:text-green-700 md:p-0">Home</Link>
          </li>
           <li>
            <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-800 hover:bg-gray-100 rounded-sm md;hover:bg-transparent md:hover:text-green-700 md:p-0">About</Link>
          </li>
           <li>
            <Link href="/rooms" className="block py-2 pl-3 pr-4 text-gray-800 hover:bg-gray-100 rounded-sm md;hover:bg-transparent md:hover:text-green-700 md:p-0">Rooms</Link>
          </li>
           <li>
            <Link href="contact" className="block py-2 pl-3 pr-4 text-gray-800 hover:bg-gray-100 rounded-sm md;hover:bg-transparent md:hover:text-green-700 md:p-0">Contact</Link>
          </li>
           <li>
            <Link href="/myreservation" className="block py-2 pl-3 pr-4 text-gray-800 hover:bg-gray-100 rounded-sm md;hover:bg-transparent md:hover:text-green-700 md:p-0">My Reservation</Link>
          </li>
           <li>
            <Link href="/admin/dashboard" className="block py-2 pl-3 pr-4 text-gray-800 hover:bg-gray-100 rounded-sm md;hover:bg-transparent md:hover:text-green-700 md:p-0">Dashboard</Link>
          </li>
           <li>
            <Link href="admin/rooms" className="block py-2 pl-3 pr-4 text-gray-800 hover:bg-gray-100 rounded-sm md;hover:bg-transparent md:hover:text-green-700 md:p-0">Mange Rooms</Link>
          </li>
           <li className="pt-2 md:pt-0">
                <Link href="/login" className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm">Login</Link>
           </li>
            
          
        </ul>
      </div>
    </>
  )
}

export default Navlink