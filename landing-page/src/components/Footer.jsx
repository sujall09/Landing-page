import React from 'react';
import { Logo, mail, call } from './images';

const sections = [
    {
        title: 'Links',
        items: ['Home', 'About Us', 'Bookings', 'Blogs'],
    },
    {
        title: 'Legal',
        items: ['Terms of use', 'Privacy Policy', 'Cookie Policy'],
    },
    {
        title: 'Link',
        items: ['Take Tour', 'Live Chat', 'Reviews'],
    },
];

function Footer() {
    return (
        <div className='w-full mt-24 py-8 px-2 pl-10 bg-gray-100 dark:bg-slate-900'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 border-b-2 border-gray-600 py-8'>
                <ul className='col-span-2 md:col-span-1'>
                    <li className='flex items-center font-bold text-xl text-black dark:text-white'>
                        <img src={Logo} alt="logo" className='w-5 mr-2' />
                        Uifry
                    </li>
                    <li className='flex items-center cursor-pointer py-1 mt-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white gap-1'>
                        <img src={mail} alt="mail" className='w-4' />
                        help@frybix.com
                    </li>
                    <li className='flex items-center cursor-pointer py-1 mt-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white gap-1'>
                        <img src={call} alt="call" className='w-4' />
                        +123 456 789
                    </li>
                </ul>
                {sections.map((section, index) => (
                    <div key={index}>
                        <h6 className='text-2xl font-semibold text-black dark:text-white'>{section.title}</h6>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className='cursor-pointer py-1 mt-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className='col-span-2'>
                    <h6 className='font-bold uppercase text-black dark:text-white'>Newsletter</h6>
                    <p className='py-2 text-gray-500 dark:text-gray-400'>
                        Stay Up To Date
                    </p>
                    <form action="" className='flex flex-col sm:flex-row'>
                        <input
                            type="email"
                            placeholder='Enter your email address'
                            className='w-full p-2 mr-4 rounded-md mb-4 dark:bg-gray-800 dark:text-white'
                        />
                        <button className='mb-4 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition duration-300'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 dark:text-gray-400'>
                <p className='py-4'>
                    © 2022 uifry.com. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
