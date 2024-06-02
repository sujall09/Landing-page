import React from 'react';
import { Mobile4, Circle, cube, plus } from './images'

function Features() {
    return (
        <div className='flex flex-col md:flex-row p-4 md:p-10'>
            <div className="left flex justify-center items-center md:w-1/2 mb-8 md:mb-0">
                <img src={Mobile4} alt="Mobile" className="w-full max-w-sm" />
            </div>

            <div className="right flex flex-col justify-center md:w-1/2">
                <div className="heading mb-5">
                    <h5 className='text-customRed font-semibold text-xl mb-2'>FEATURES</h5>
                    <h2 className='text-4xl font-extrabold mb-5'>Uifry Premium</h2>
                </div>
                <div className="features flex flex-col gap-5">
                    <div className="feature flex flex-col mb-4">
                        <div className="flex items-center mb-2">
                            <img src={plus} alt="Plus" className="w-5 h-5 mr-2" />
                            <h3 className='text-black font-bold dark:text-white'>Budgeting Intervals</h3>
                        </div>
                        <p className='ml-0 mr-0 text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>

                    <div className="feature flex flex-col mb-4">
                        <div className="flex items-center mb-2">
                            <img src={cube} alt="Plus" className="w-5 h-5 mr-2" />
                            <h3 className='text-black font-bold dark:text-white'>Expense Tracking</h3>
                        </div>
                        <p className='ml-0 mr-0 text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>

                    <div className="feature flex flex-col mb-4">
                        <div className="flex items-center mb-2">
                            <img src={Circle} alt="Plus" className="w-5 h-5 mr-2" />
                            <h3 className='text-black font-bold dark:text-white'>Financial Insights</h3>
                        </div>
                        <p className='ml-0 mr-0 text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
