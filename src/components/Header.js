import React from 'react'
import tgheader from '../assets/tgheader.svg'
import menuheader from '../assets/menuheader.svg'
import dextheader from '../assets/dextheader.svg'
import cgheader from '../assets/cgheader.svg'
import xheader from '../assets/xheader.svg'

function Header() {
    return (
        <div className='z-40 mb-20 lg:mb-16 rounded-full flex flex-row justify-center items-center bg-[#FEFEFE]/40 backdrop-blur-sm w-11/12 lg:w-96'>

            <img src={tgheader} alt="" className='m-2 w-9' />
            <img src={dextheader} alt="" className='m-2 w-9' />
            <img src={menuheader} alt="" className='m-2 w-14' />
            <img src={cgheader} alt="" className='m-2 w-9' />
            <img src={xheader} alt="" className='m-2 w-9' />
        </div>
    )
}

export default Header