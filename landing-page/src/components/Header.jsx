import React from 'react'
import Navbar from './Navbar'
import { GoArrowRight } from "react-icons/go";
import { FaRegPlayCircle } from "react-icons/fa";
import { Mobile1, Mobile2, Mobile3, Bottom, Round, Star } from './images'

function Header() {
    return (
        <header className="bg-gray-100 dark:bg-slate-900">
            <Navbar />
            <div className='flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-16 md:py-10'>
                <img src={Star} alt="" className='absolute right-20' />
                <div className=" flex flex-col md:w-1/2 space-y-6 items-center justify-between">
                    <div className="top space-y-4">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white">
                            Make the Best Financial Decisions
                        </h1>

                        <p className="text-gray-600  md:text-lg">
                            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-black text-white py-2 px-6 rounded flex items-center space-x-2 hover:bg-gray-800 transition duration-300">
                                <span>Get Started</span>
                                <GoArrowRight />
                            </button>

                            <button className="flex items-center space-x-2 text-black py-2 px-6 rounded dark:text-white hover:bg-black hover:text-white transition duration-300">
                                <FaRegPlayCircle />
                                <span>Watch Video</span>
                            </button>
                        </div>
                        <img src={Star} alt="" className='absolute top-0 right-0' />
                    </div>
                    <div className="bottom  ">
                        <img src={Bottom} alt="bottom" className="w-[30vw] h-full mx-auto mr-20" />
                    </div>

                </div>

                <div className=" relative  h-[100vh] w-[50%] mr-10">
                    <img src={Mobile1} className='w-[30vw] z-10 absolute top-10 -right-20' />
                    <img src={Mobile2} className='w-[30vw] z-10 absolute top-15 -right-2' />
                    <img src={Mobile3} className='w-[25vw] z-10 absolute -top-10 left-20' />
                    <img src={Round} className='absolute z-1 w-[30vw] -right-4 bottom-60' />
                </div>
                <img src={Star} alt="" className='absolute top-20' />



            </div>
        </header>
    )
}

export default Header;
