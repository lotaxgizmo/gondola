import React from 'react'
import mainart1 from '../assets/mainart1.svg'
import mainart2 from '../assets/mainart2.svg'
import bheeple from '../assets/bheeple.svg'
import ari from '../assets/ari.svg'
import specimen1 from '../assets/specimen1.svg'
import specimen2 from '../assets/specimen2.svg'
import longspecimen from '../assets/longspecimen.svg'

function Gallery() {
    return (
        <div className='gallery flex flex-col justify-center items-center w-full '>

            <div className="border-red-400 border-2 w-11/12">


                {/* <div className="toplayer flex flex-row justify-between items-center w-full ">
                    <div className="left aa w-6/12 h-96; m-3 rounded-3xl overflow-clip border-4 border-black ">
                        <img src={bheeple} alt="" className=' w-full' />

                    </div>
                    <div className="right aa w-6/12 h-96; m-3 rounded-3xl overflow-clip border-4 border-black ">
                        <img src={ari} alt="" className=' w-full' />

                    </div>
                </div> */}



                <div className="second flex flex-row justify-between items-center border-black border-2">

                    <div className="left aaa">
                        <div className="upper flex flex-row justify-between items-center ">
                            <img src={specimen1} alt="" className='w-[530px]  m-2 border-4 border-black rounded-3xl' />
                            <img src={specimen2} alt="" className='w-[450px]  m-2 border-4 border-black rounded-3xl' />
                        </div>
                        <div className="upper flex flex-row justify-between items-center ">
                            <img src={specimen1} alt="" className='w-[530px]  m-2 border-4 border-black rounded-3xl' />
                            <img src={specimen2} alt="" className='w-[450px]  m-2 border-4 border-black rounded-3xl' />
                        </div>
                    </div>

                    <div className="right aaa flex h-full">
                        <img src={longspecimen} alt="" className='w-96 border-4 border-black rounded-3xl h-full' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery