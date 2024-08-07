import React from 'react'
import howtobuy from '../assets/howtobuy.png'
import sittingdola from '../assets/sittingdola.png'
import step2 from '../assets/step2.png'
import step1 from '../assets/step1.png'
import rollblurr from '../assets/rollblurr.png'
import lilcloud from '../assets/lilcloud.png'
import maxiscarfdola from '../assets/maxiscarfdola.png'
import awkwardgondola from '../assets/awkwardgondola.png'
import ordinarygondola from '../assets/ordinarygondola.png'

function Howto() {
    return (
        <div className='flex flex-col items-center justify-center howto relative pt-20'>

            <div className="thing relative flex flex-col justify-center items-center w-full">
                <img src={howtobuy} alt="" className='w-8/12 z-20' />
                <img src={rollblurr} alt="" className='  absolute wf z-[12]' />
            </div>

            <div className="total flex flex-col lg:flex-row justify-center items-center">
                <div className="left z-20">
                    <img src={step1} alt="" className='w-[600px] p-2 z-20' />
                    <img src={step2} alt="" className='w-[600px] p-2 z-20' />
                </div>
                <div className="right z-20">
                    <img src={sittingdola} alt="" className='w-[700px] p-4' />
                </div>
            </div>

            <img src={lilcloud} alt="" className='absolute right-0 lg:right-0 w-40 lg:w-[500px] top-0 z-[11]' />
            <img src={maxiscarfdola} alt="" className='absolute   w-72 lg:w-[850px] -top-10 lg:-top-[300px] z-[10] animate-pulse' />
            <img src={awkwardgondola} alt="" className='absolute right-0 lg:right-10 w-10 lg:w-32 z-40' />
            <img src={ordinarygondola} alt="" className='absolute right-10 w-10 lg:w-40 bottom-40 rotate-12' />
        </div>
    )
}

export default Howto