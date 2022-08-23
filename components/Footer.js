import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-1/2 flex justify-evenly items-center text-5xl">
                <FaGithub />
                <FaInstagram />
                <FaLinkedinIn />
                <FaEnvelope />
                <FaFileAlt />
            </div>
        </div>
    )
}

export default Footer