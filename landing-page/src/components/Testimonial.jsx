import React, { useState } from 'react';
import { reviews } from './review';

function Testimonial() {
    const [activeReview, setActiveReview] = useState(0);

    const handleImageClick = (index) => {
        setActiveReview(index);
    };

    return (
        <div className='flex flex-col items-center px-4 md:px-0'>
            <h5 className='font-semibold text-gray-600 dark:text-white'>TESTIMONIAL</h5>
            <h2 className='font-bold text-2xl md:text-4xl text-gray-800 mt-2 dark:text-white text-center'>What Our Users Say About Us?</h2>
            <div className="w-full max-w-lg mt-10 mb-10 mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl">
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{reviews[activeReview].tagLine}</h4>
                <p className="text-gray-500 mb-4">
                    "{reviews[activeReview].review}"
                </p>
                <div className="flex justify-center space-x-3 items-center">
                    {reviews.map((review, index) => (
                        <img
                            key={review.id}
                            src={review.src}
                            alt="avatar"
                            className={`w-10 h-10 rounded-full cursor-pointer transition-transform duration-300 ${activeReview === index ? 'scale-110' : 'hover:scale-110 opacity-50 grayscale'
                                }`}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
                <div className="mt-4 text-gray-800 font-semibold text-lg dark:text-white text-center">-{reviews[activeReview].name}</div>
            </div>
        </div>
    );
}

export default Testimonial;
