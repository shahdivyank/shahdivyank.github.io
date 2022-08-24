import React from 'react'
import { Row, Col } from "react-bootstrap"
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa"


const Landing = () => {

    const stars = new Array(250).fill(0)



    return (
        <div style={{ height: "100vh" }} className="relative flex justify-center items-center bg-gradient-to-b from-sky-900 to-purple-500 ">

            {
                stars.map((star, index) => (
                    <span style={{ top: (Math.random() * 100).toString() + "%", left: (Math.random() * 100).toString() + "%" }}
                        key={index}
                        className="absolute animate-pulse bg-white h-[2px] w-[2px] rounded-full"></span>
                ))
            }
            {
                stars.map((star, index) => (
                    <span style={{ top: (Math.random() * 100).toString() + "%", left: (Math.random() * 100).toString() + "%" }}
                        key={index}
                        className="absolute animate-twinkling-star bg-white h-1 w-1 rounded-full"></span>
                ))
            }

            <Row className='flex justify-center items-center'>
                <Col lg={6} className="flex justify-center items-center flex-col">
                    <p className="font-lexend text-6xl text-center text-white">Divyank Shah<br /><p className='text-3xl mt-3'>Aspiring Software Engineer</p></p>
                    <div className="w-full text-white flex justify-evenly items-center text-5xl">
                        <FaGithub className='hover:text-gray-300 cursor-pointer' />
                        <FaInstagram className='hover:text-gray-300 cursor-pointer' />
                        <FaLinkedinIn className='hover:text-gray-300 cursor-pointer' />
                        <FaEnvelope className='hover:text-gray-300 cursor-pointer' />
                        <FaFileAlt className='hover:text-gray-300 cursor-pointer' />
                    </div>
                </Col>
                <Col lg={6} className="flex justify-center items-center">
                    <img className="w-4/6 rounded-lg z-10" src="profile.jpg" />

                </Col>

            </Row>



        </div>
    )
}

export default Landing