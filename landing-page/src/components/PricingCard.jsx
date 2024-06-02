import React from 'react';
import { GoArrowRight } from 'react-icons/go';

function PricingCard({ heading, amount, features }) {
    return (
        <div className="w-full md:w-[25vw] mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 m-4">
            <div className="px-4 py-2 flex-grow">
                <h2 className="text-center font-semibold text-xl mb-2 text-black dark:text-white">{heading}</h2>
                <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold text-black dark:text-white">${amount}</span>
                    <span className="text-lg text-gray-600 dark:text-gray-400">/month</span>
                </div>
            </div>
            <div className="px-4 py-2 flex-grow">
                <ul className="list-disc list-inside">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L9 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8A1 1 0 0 1 9 17z" clipRule="evenodd" />
                            </svg>
                            <span className="text-black dark:text-white">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-auto px-4 py-2">
                <button className="w-full flex justify-center bg-black text-white py-2 px-6 rounded items-center space-x-2 hover:bg-gray-800 transition duration-300 dark:hover:bg-white dark:hover:text-black">
                    Get Started
                    <GoArrowRight />
                </button>
            </div>
        </div>
    );
}

export default PricingCard;
