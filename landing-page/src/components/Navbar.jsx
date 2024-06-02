import React, { useState } from 'react';
import { Logo } from './images';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <navbar className="bg-white  w-full dark:bg-slate-900">
            <div className="container mx-auto px-20 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="logo flex items-center dark:text-white font-extrabold gap-1 text-2xl cursor-pointer">
                        <img src={Logo} alt="Logo" className="h-8 w-8" />
                        uifry
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#home" className="font-bold text-customRed hover:text-gray-600">Home</a>
                        <a href="#aboutUs" className="font-bold dark:text-white hover:text-gray-600">About Us</a>
                        <a href="#pricing" className="font-bold dark:text-white hover:text-gray-600">Pricing</a>
                        <a href="#features" className="font-bold dark:text-white hover:text-gray-600">Features</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="bg-black text-white py-2 px-7 rounded text-sm hover:bg-gray-800 transition duration-300">
                        Download
                    </button>
                    <div className="md:hidden ml-4">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col space-y-4">
                        <a href="#home" className="font-bold text-customRed hover:text-gray-600" onClick={toggleMenu}>Home</a>
                        <a href="#aboutUs" className="font-bold hover:text-gray-600" onClick={toggleMenu}>About Us</a>
                        <a href="#pricing" className="font-bold hover:text-gray-600" onClick={toggleMenu}>Pricing</a>
                        <a href="#features" className="font-bold hover:text-gray-600" onClick={toggleMenu}>Features</a>
                    </nav>
                </div>
            )}
        </navbar>
    );
}

export default Navbar;
