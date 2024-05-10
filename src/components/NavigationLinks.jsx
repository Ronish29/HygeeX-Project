import React from 'react'
import Home from '../Images/Home.png'
import Arrow from '../Images/arrow.png'

const NavigationLinks = () => {
  return (
    <div className="flex items-center px-5 py-2 sm:py-4 md:py-6 lg:py-8">
      <img src={Home} alt="home" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      <img
        src={Arrow}
        alt="arrow"
        className="w-2 h-auto mx-1 sm:w-4 sm:mx-2 md:w-6 md:mx-3 lg:w-8 lg:mx-4"
      />
      <p className="text-xs text-[#696671] font-medium sm:text-sm md:text-base lg:text-lg">
        Flashcard
      </p>
      <img
        src={Arrow}
        alt="arrow"
        className="w-2 h-auto mx-1 sm:w-4 sm:mx-2 md:w-6 md:mx-3 lg:w-8 lg:mx-4"
      />
      <p className="text-xs text-[#696671] font-medium sm:text-sm md:text-base lg:text-lg">
        Mathematics
      </p>
      <img
        src={Arrow}
        alt="arrow"
        className="w-2 h-auto mx-1 sm:w-4 sm:mx-2 md:w-6 md:mx-3 lg:w-8 lg:mx-4"
      />
      <p className="text-xs text-[#06286E] font-medium sm:text-sm md:text-base lg:text-lg">
        Relation and Function
      </p>
    </div>
  )
}

export default NavigationLinks