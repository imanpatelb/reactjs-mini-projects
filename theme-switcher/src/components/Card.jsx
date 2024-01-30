import React from 'react';
import cupImage from '../assets/cup.jpeg';

export default function Card() {
    return (
        <div className="flex justify-center items-center h-screen bg-orange-50 dark:bg-gray-700">
            <div className="border border-gray-200 rounded-3xl shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 max-w-2xl mx-auto"> {/* Apply rounded-3xl here */}
                {/* Grid container */}
                <div className="grid grid-cols-2 gap-2">
                    {/* Image container */}
                    <div>
                        <img className="object-cover w-full h-full rounded-l-3xl" src={cupImage} alt="White Coffee Mug" /> {/* Apply rounded-l-3xl to left side of the image */}
                    </div>

                    {/* Text content container */}
                    <div className="p-4 flex flex-col justify-between">
                        <div>
                            <h3 className='text-sm font-bold text-gray-500 dark:text-amber-200 uppercase tracking-[.3em]'>Coffee Mug</h3> {/* Adjusted classes for styling */}
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white py-4 font-fraunces">
                                White Coffee Mug
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium font-fraunces leading-6 tracking-[.05em]">
                                Coffee Mugs are designed to express emotions. These are acclaimed for their amazing designs & superior quality.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center mt-4">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white font-fraunces">₹749</span>
                                <span className="text-lg line-through text-gray-400 ml-2">₹999</span>
                            </div>
                            <button className="flex gap-4 justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm py-3 mt-3 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <span className="text-center font-montserrat">Add to Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}