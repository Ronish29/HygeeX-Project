import React, { useState } from 'react'
import ArrowDown from '../Images/arrow-down.png'
import ArrowUp from '../Images/arrow-up.png'
const FaqSection = () => {
    const [expandedIndexes, setExpandedIndexes] = useState([])

    const handleExpand = (index) => {
        setExpandedIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        )
    }
    return (
        <div className='flex flex-col mt-[100px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-10'>
            <h1 className='faq-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed'>FAQ</h1>
            <div className='flex flex-col gap-y-4 mt-10'>
                <div className='flex flex-col'>
                    <div
                        className='flex justify-between items-center w-full sm:w-auto max-w-[800px] rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-[1px] cursor-pointer'
                        onClick={() => handleExpand(0)}
                    >
                        <div className='w-full bg-white rounded-xl flex flex-col justify-between '>
                            <div className='flex justify-between py-4 items-center'>
                                <p className='font-semibold text-sm sm:text-base px-4 sm:px-5 text-[#28262C] w-[95%]'>
                                    Can education flashcards be used for all age groups?
                                </p>
                                <div className='w-[10%]'>
                                    <img
                                        src={expandedIndexes.includes(0) ? ArrowUp : ArrowDown}
                                        alt={expandedIndexes.includes(0) ? 'arrow-up' : 'arrow-down'}
                                        className='transition-transform duration-300'
                                        style={{ transform: expandedIndexes.includes(0) ? ArrowUp : ArrowDown, transformOrigin: 'center center' }}
                                    />
                                </div>


                            </div>

                            {expandedIndexes.includes(0) && (
                                <div className='w-full bg-white rounded-b-xl '>
                                    <p className='text-[#28262C] text-sm sm:text-base px-4 sm:px-5 pb-5'>
                                        Yes, education flashcards can be tailored to be different age groups and learning levels. There are
                                        Flashcards designed for  preschools, elementary school students, high school students, and
                                        even for college-level and adult learners
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
                <div className='flex flex-col'>
                    <div
                        className='flex justify-between items-center w-full sm:w-auto max-w-[800px] rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-[1px] cursor-pointer'
                        onClick={() => handleExpand(1)}
                    >
                        <div className='w-full bg-white rounded-xl flex flex-col justify-between '>
                            <div className='flex justify-between  py-4 items-center'>
                                <p className='font-semibold text-sm sm:text-base px-4 sm:px-5 text-[#28262C] w-[95%]'>
                                    How do education flashcards work?
                                </p>
                                <div className='w-[10%]'>
                                    <img
                                        src={expandedIndexes.includes(1) ? ArrowUp : ArrowDown}
                                        alt={expandedIndexes.includes(1) ? 'arrow-up' : 'arrow-down'}
                                        className='pr-4 sm:pr-5 transition-transform duration-300'
                                        style={{ transform: expandedIndexes.includes(0) ? ArrowUp : ArrowDown, transformOrigin: 'center center' }}
                                    />
                                </div>

                            </div>

                            {expandedIndexes.includes(1) && (
                                <div className='w-full bg-white rounded-b-xl'>
                                    <p className='text-[#28262C] text-sm sm:text-base px-4 sm:px-5 pb-5'>
                                        Education flashbacks work by presenting a question or prompt on one side and the
                                        corresponding answer or infromation on the other.Users can review the cards repeatedly,
                                        reinforcing their memory and enhancing learning through repetition
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
                <div className='flex flex-col'>
                    <div
                        className='flex justify-between items-center w-full sm:w-auto max-w-[800px] rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-[1px] cursor-pointer'
                        onClick={() => handleExpand(2)}
                    >
                        <div className='w-full bg-white rounded-xl flex flex-col justify-between '>
                            <div className='flex justify-between  py-4 items-center'>
                                <p className='font-semibold text-sm sm:text-base px-4 sm:px-5 text-[#28262C] w-[95%]'>
                                    Can education flashcards be used for all age groups?
                                </p>
                                <div className='w-[10%]'>
                                    <img
                                        src={expandedIndexes.includes(2) ? ArrowUp : ArrowDown}
                                        alt={expandedIndexes.includes(2) ? 'arrow-up' : 'arrow-down'}
                                        className='pr-4 sm:pr-5 transition-transform duration-300'
                                        style={{ transform: expandedIndexes.includes(0) ? ArrowUp : ArrowDown, transformOrigin: 'center center' }}
                                    />
                                </div>
                            </div>

                            {expandedIndexes.includes(2) && (
                                <div className='w-full bg-white rounded-b-xl '>
                                    <p className='text-[#28262C] text-sm sm:text-base px-4 sm:px-5 pb-5'>
                                        Absolutely. Flashbacks are an excellent tool for test preparation, allowing students to review key
                                        concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge
                                        before exams.
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection