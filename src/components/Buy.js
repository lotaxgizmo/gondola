import React from 'react'
import mountaingondola from '../assets/mountaingondola.svg'
import buyhalfbox from '../assets/buyhalfbox.svg'
import buyhalfboxmobile from '../assets/buyhalfboxmobile.svg'
import uniswap from '../assets/uniswap.svg'
import cowswap from '../assets/cowswap.svg'
import comingsoon from '../assets/comingsoon.svg'

function Buy() {
    return (
        <div className='relative  linkbg bg-[#C3FCF1] rounded-[55px] p-5 my-10 border-4 border-black overflow-clip m-4 mb-60'>

            <div className="total flex flex-col lg:flex-row justify-center items-center">

                <img src={buyhalfbox} className='absolutee w-24 -ml-10 -left-5 hidden lg:flex' alt="" />
                <img src={buyhalfboxmobile} className='absolutee w-2/4 -mt-5 -left-5 lg:hidden flex' alt="" />
                <div className="left">
                    <div className="elite p-3 top flex flex-row flex-wrap justify-center items-center">

                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <img src={cowswap} alt="" className='w-32 lg:w-60 p-1' />
                        </a>

                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <img src={uniswap} alt="" className='w-32 lg:w-60 p-1' />
                        </a>

                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <img src={comingsoon} alt="" className='w-32 lg:w-60 p-1' />
                        </a>
                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <img src={comingsoon} alt="" className='w-32 lg:w-60 p-1' />
                        </a>

                    </div>



                </div>
            </div>

        </div>
    )
}

export default Buy