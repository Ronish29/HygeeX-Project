import React, { useState } from 'react'
import Idea from '../Images/idea.png'
import Volume from '../Images/volume.png'
import Replay from '../Images/replay.png'
import Previous from '../Images/back.png'
import Next from '../Images/next.png'
import FullScreen from '../Images/full_screen.png'
import HygeeX from '../Images/hygee.png'
import CreateFlashCard from '../Images/create.png'
import './MainSection.css'

const MainSection = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-relaxed mainHeader">Relations and Functions ( Mathematics )</h1>

            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex items-start justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap sm:flex-nowrap">
                    <p className="font-bold text-sm sm:text-base md:text-lg text-[#06286E] border-b-2 border-b-[#06286E] py-2 cursor-pointer">
                        Study
                    </p>
                    <p className="font-medium text-sm sm:text-base md:text-lg text-[#696671] py-2 cursor-pointer">
                        Quiz
                    </p>
                    <p className="font-medium text-sm sm:text-base md:text-lg text-[#696671] py-2 cursor-pointer">
                        Test
                    </p>
                    <p className="font-medium text-sm sm:text-base md:text-lg text-[#696671] py-2 cursor-pointer">
                        Game
                    </p>
                    <p className="font-medium text-sm sm:text-base md:text-lg text-[#696671] py-2 cursor-pointer">
                        Others
                    </p>
                </div>

                <div className="flex justify-center items-center flex-col mt-6">

                    <div
                        className={`card w-full max-w-[712px] h-[393.19px] rounded-[42.51px] relative flex items-center justify-center bg-[#06286E] p-8 transform ${isFlipped ? 'rotateY-180 flipped-card' : 'rotateY-0'
                            } transition-transform duration-300 cursor-pointer`}
                        onClick={handleClick}
                    >
                        
                        <div className="image-aligned">
                            <img
                                src={Idea}
                                alt="idea"
                                className={`cursor-pointer w-8 sm:w-auto absolute top-[34.01px] left-[34.01px]`}
                            />
                            <img
                                src={Volume}
                                alt="volume"
                                className={`absolute top-[34.01px] right-[34.01px] cursor-pointer w-8 sm:w-auto ${isFlipped ? 'rotate-180' : ''
                                    }`}
                            />
                        </div>

                        
                        <div className="card-content">
                           
                            <p
                                className={`font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white ${isFlipped ? 'hidden' : 'block'
                                    }`}
                            >
                                9 + 6 + 7x - 2x - 3
                            </p>

                           
                            <p
                                className={`font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white ${isFlipped ? 'block' : 'hidden'
                                    }`}
                            >
                                5x + 12
                            </p>
                        </div>
                    </div>




                    <div className="flex justify-between items-center mt-10 w-full sm:w-[612px] gap-6">
                        <img src={Replay} alt="replay" className="cursor-pointer w-6 sm:w-auto" />
                        <div className="flex justify-between items-center w-full sm:w-[272px] gap-6">
                            <img src={Previous} alt="previous" className="cursor-pointer w-6 sm:w-auto" />
                            <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#202B37]">
                                01/10
                            </p>
                            <img src={Next} alt="next" className="cursor-pointer w-6 sm:w-auto" />
                        </div>

                        <img src={FullScreen} alt="full-screen" className="cursor-pointer w-6 sm:w-auto" />
                    </div>

                </div>



            </div>

            <div className="flex flex-wrap justify-center sm:justify-between items-center mt-10 gap-6">
                <div className="flex items-center gap-5">
                    <div className="published-round flex items-center justify-center rounded-full w-12 h-12 sm:w-16 sm:h-16">
                        <img src={HygeeX} alt="hygee-logo" className="w-8 h-8 sm:w-auto sm:h-auto" />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <p className="font-bold text-xs sm:text-sm text-[#696671]">
                            Published by
                        </p>
                        <p className="text-[#06286E] font-bold text-xl sm:text-2xl md:text-3xl leading-relaxed">
                            HygeeX
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src={CreateFlashCard} alt="" className="w-8 sm:w-auto" />
                    <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed flashcard-text">
                        Create Flashcard
                    </p>
                </div>
            </div>

        </div>
    )
}

export default MainSection