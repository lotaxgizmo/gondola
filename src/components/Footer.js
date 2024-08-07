import React from 'react'
import cabottom from '../assets/cabottom.png'
import year from '../assets/year.png'
import about from '../assets/about.svg'
import tokenomics from '../assets/tokenomics.svg'
import middleline from '../assets/middleline.svg'
import howto from '../assets/howto.svg'

function Footer() {
    return (
        <div className='flex flex-col justify-center items-center bg-[#FE93C7] pb-10'>
            <img src={cabottom} alt="" className='w-10/12 lg:w-8/12' />

            <div className="cl flex flex-col lg:flex-row justify-center items-center">
                <img src={about} alt="" className='lg:w-52 w-16' />
                <img src={middleline} alt="" className='w-10 lg:mx-5 hidden lg:flex' />
                <img src={howto} alt="" className='lg:w-96 w-32' />
                <img src={middleline} alt="" className='w-10 lg:mx-5 hidden lg:flex' />
                <img src={tokenomics} alt="" className='lg:w-96 w-32' />
            </div>

            <img src={year} alt="" className='w-32 lg:w-96 ' />
        </div>
    )
}

export default Footer