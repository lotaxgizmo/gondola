import React from 'react'
import chart from '../assets/chart.png'
import header from '../assets/header.png'
import grassbg from '../assets/grassbg.png'
import gondohero from '../assets/gondohero.png'
import buynow from '../assets/buynow.png'
import CA from '../assets/CA.png'
import standgondola from '../assets/standgondola.png'
import gondolaleg from '../assets/gondolaleg.png'
import standongondola from '../assets/standongondola.png'
import ordinarygondola from '../assets/ordinarygondola.png'
import awkwardgondola from '../assets/awkwardgondola.png'
import roll1 from '../assets/roll1.svg'
import roll2 from '../assets/roll2.svg'
import hairdola from '../assets/hairdola.svg'
import skydola from '../assets/skydola.png'
import capdola from '../assets/capdola.svg'

import Header from '../components/Header'


function Hero() {
    return (
        <div className='mainhero overflow-hidden flex flex-col lg:justify-center justify-start items-center relative pt-20d lg:min-h-screen, pt-20 lg:pb-10 pb-0 '>
            <img src={roll1} alt="" className='z-20 w-[1500px]  lg:w-[3000px] max-w-none absolute top-0' />

            <Header />
            {/* <img src={header} alt="" className='z-20 w-96' /> */}

            <div className='absolutes'>
                <img src={gondolaleg} alt="" className='absolute w-40 lg:w-[600px] left-0 top-20 max-w-none' />
                <img src={ordinarygondola} alt="" className='absolute z-[21] w-12 lg:w-[220px] right-0 bottom-10 lg:right-0 lg:bottom-20 max-w-none' />
                <img src={awkwardgondola} alt="" className='absolute z-[19] w-12 lg:w-[100px] right-16 bottom-0 lg:right-52 lg:bottom-0 max-w-none' />
            </div>


            <div className="hero flex flex-col justify-center items-center relative w-fit border-2d">
                <img src={skydola} alt="" className='absolute z-[1] w-16 lg:w-[200px] left-52 -top-20 lg:left-[35%] lg:-top-16 max-w-none' />
                <img src={hairdola} alt="" className='absolute z-[1] w-16 lg:w-[250px] right-52 -top-16 lg:right-80 lg:-top-32 max-w-none' />
                <img src={standongondola} alt="" className='absolute z-[1] w-12 lg:w-[150px] right-5 -top-10 lg:right-24 lg:-top-16 max-w-none' />
                <img src={gondohero} alt="" className='z-20 w-10/12 lg:mt-20 lg:-mb-20' />

            </div>
            <img src={capdola} alt="" className='absolute z-[1] w-16 lg:w-[200px] left-20 bottom-0 lg:left-[15%] lg:bottom-0 max-w-none' />

            <div className='z-20 flex flex-row justify-center items-center'>
                <img src={buynow} alt="" className='z-20 w-52 lg:w-72 p-2' />
                <img src={chart} alt="" className='z-20 w-52 lg:w-72 p-2' />
            </div>

            <img src={CA} alt="" className='z-20 w-96 lg:w-8/12 mb-20 lg:mb-96 ' />
            <img src={standgondola} alt="" className='w-20 lg:w-60 a absolute bottom-0 justify-end bottom-0 -mb-10 move-left-right' />
        </div>
    )
}

export default Hero