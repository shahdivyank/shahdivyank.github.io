import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa"
import Wave from 'react-wavify'

const Footer = () => {
    return (
        <div className="w-full flex relative justify-center items-center flex-col bg-orange-500">

            <div className="bg-white h-60 w-60 absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full"></div>

            <Wave fill=''
                className='fill-sky-900 z-20'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.25,
                    points: 3
                }}
            />
            <div className='w-full h-40 z-10 bg-sky-900 flex justify-center items-center'>
                <div className="w-1/2 text-white flex justify-evenly items-center text-5xl p-5">
                    <FaGithub className='hover:text-gray-300 cursor-pointer' />
                    <FaInstagram className='hover:text-gray-300 cursor-pointer' />
                    <FaLinkedinIn className='hover:text-gray-300 cursor-pointer' />
                    <FaEnvelope className='hover:text-gray-300 cursor-pointer' />
                    <FaFileAlt className='hover:text-gray-300 cursor-pointer' />
                </div>
            </div>


        </div>
    )
}

export default Footer