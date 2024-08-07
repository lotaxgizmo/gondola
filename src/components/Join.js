import React from 'react'
import joinbg from '../assets/joinbg.png'
import joincommunity from '../assets/joincommunity.png'
import xround from '../assets/xround.svg'
import tiktokround from '../assets/tiktokround.svg'
import tground from '../assets/tground.svg'
import redditround from '../assets/redditround.svg'

function Join() {
    return (
        <div className='flex flex-col justify-center items-center lg:items-end joinbg w-full lg:h-[150vh]'>
            <div className="them flex flex-col justify-center items-center my-20 lg:mt-40 lg:mr-20">
                <img src={joincommunity} className='w-96 lg:w-[900px] ' alt="" />

                <div className="socials flex flex-row justify-center items-center">
                    <img src={tiktokround} className='w-14 lg:w-20 mx-3 lg:mx-6 my-4' alt="" />
                    <img src={tground} className='w-14 lg:w-20 mx-3 lg:mx-6 my-4' alt="" />
                    <img src={xround} className='w-14 lg:w-20 mx-3 lg:mx-6 my-4' alt="" />
                    <img src={redditround} className='w-14 lg:w-20 mx-3 lg:mx-6 my-4' alt="" />
                </div>

            </div>
        </div>
    )
}

export default Join