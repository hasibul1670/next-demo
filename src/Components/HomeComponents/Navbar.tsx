"use client";

import Link from "next/link";
import { useState } from "react";
import { BusIcon, FlightIcon, HotelIcon, TourIcon, VisaIcon } from "../../Icons/Icon";


const navbarContent = [
  {
    id: 1,
    Icon: FlightIcon,
    name: 'Flight',
    routePath: '/profile/booking?type=flight',
    value: 'isFlight',
  },
  {
    id: 2,
    Icon: HotelIcon,
    name: 'Hotel',
    routePath: '/profile/booking?type=hotel',
    value: 'isHotel',
  },
  {
    id: 3,
    Icon: BusIcon,
    name: 'Bus',
    routePath: '/profile/booking?type=bus',
    value: 'isBus',
  },
  {
    id: 4,
    Icon: TourIcon,
    name: 'Tour',
    routePath: '/profile/booking?type=tour',
    value: 'isTour',
  },
  {
    id: 5,
    Icon: VisaIcon,
    name: 'Visa',
    routePath: '/profile/booking?type=visa',
    value: 'isVisa',
  },
]


const Navbar: React.FC = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-white border-b h-8 2xl:max-w-7xl">
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Link className="tracking-tight uppercase focus:outline-none focus:ring " href="/">
            <span className="lg:text-lg uppercase font-bold focus:ring-0">IV Trip</span>
          </Link>
          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {open ? (
                <>
                  <path className="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </>
              ) : (
                <>
                  <path className="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </>
              )}
            </svg>
          </button>
        </div>
        <nav className={`flex-col items-center  flex-grow ${open ? 'flex' : 'hidden'} md:pb-0 md:flex md:justify-end md:flex-row`}>

          
          <Link className="px-2 py-2 text-sm  text-black font-semibold lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto flex " href="/flights">
            <FlightIcon className='mr-1 text-xl'/>
            Flights
          </Link>
          <Link className="px-2 py-2  flex text-sm text-black font-semibold lg:px-6 md:px-3 hover:text-blue-600" href="/hotels">
          <HotelIcon className='mr-1 text-xl'/>
            Hotels
          </Link>
          <Link className="px-2 py-2 text-sm   flex text-black font-semibold lg:px-6 md:px-3 hover:text-blue-600" href="/tour">
          <BusIcon className='mr-1 text-xl'/>
            Tours
          </Link>
    
          <Link className="px-2 py-2 text-sm    flex text-black font-semibold lg:px-6 md:px-3 hover:text-blue-600" href="/visa">
          <VisaIcon className='mr-1 text-xl'/>
            Visa
          </Link>
    
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          <Link href ='/login'>
            <button className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
              Sign in
            </button>
            </Link>

            <Link href ='/signup'>
            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
              Sign up
            </button>
            </Link>
          </div>


        </nav>
      </div>
    </div>
  );
}
export default Navbar;
