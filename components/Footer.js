import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa"
import Wave from 'react-wavify'

const Footer = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <Wave fill='black'
                className='fill-black'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.25,
                    points: 3
                }}
            />
            <div className='w-full bg-black flex justify-center items-center'>
            <div className="w-1/2 text-white flex justify-evenly items-center text-5xl p-5">
                    <FaGithub />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaEnvelope />
                    <FaFileAlt />
                </div>
            </div>

                
        </div>
    )
}

export default Footer