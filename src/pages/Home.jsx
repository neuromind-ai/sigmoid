import React from 'react'
import logo from '../assets/logo.svg'
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import line from '../assets/line.svg'
const Home = () => {
    return (
        <div className='  md:pt-2.8rem md:pb-0 md:px-60 pb-44 pt-16.3rem px-8'>

      
        <div className='flex justify-center items-center flex-col  px-4 pt-4 gap-24 md:gap-7.5rem bg-custom-bg-color '>
            <div className='md:mt-12 mt-9'>
                <div className='flex items-center justify-center gap-4'>
                    <img className='md:w-16 h-16 w-8 text-fontcolor' src={logo} alt="" />
                    <p className='text-fontcolor md:text-[3.5rem] text-[2rem] font-[700] '>sigmoid</p>
                </div>
                <p className='sm:text-[1.7rem] text-fontcolor2 font-[600] mt-2 md:leading-customlineheight text-[1rem] md:text-[1.8rem] whitespace-nowrap'>integrated staking layer for AI</p>
            </div>
            <div className='flex justify-center items-center flex-col mt-28 gap-2'>
                <p className=' text-[2rem] md:text-[2.8rem] font-[700] text-fontcolor  '>Join Us</p>
                <div className='flex sm:gap-10 md:gap-8 gap-2 items-center justify-center md:mb-4'>
                    <a href="https://twitter.com/sigmoidwtf" className='flex items-center justify-center gap-2'>

                        <FaXTwitter className='text-orange-700' />
                       <p className='underline font-[600] text-fontcolor '> @sigmoidwtf</p>
                    </a>
                   <img className='h-4 md:h-6 w-8 font-[600]' src={line} alt="" />
                    <a href="mailto:hi@sigmoid.wtf" className='flex items-center justify-center gap-2'>
                        <TfiEmail className='text-orange-700' />
                        <p className='underline font-[600] text-fontcolor '>hi@sigmoid.wtf</p>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home
