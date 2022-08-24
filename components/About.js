import React from 'react'
import { Row, Col } from "react-bootstrap"

const About = () => {

    // const stars = new Array(100).fill(0)
    return (
        <section id="about" className="flex justify-center items-center font-lexend flex-col -z-20 bg-gradient-to-b from-purple-500 to-purple-300 ">
            {/* {
                stars.map((star, index) => (
                    <span style={{ top: (Math.random() * 100).toString() + "%", left: (Math.random() * 100).toString() + "%" }}
                        key={index}
                        className="absolute animate-pulse bg-white h-1 w-1 rounded-full"></span>
                ))
            } */}

            <p className="text-6xl">About Me</p>

            <Row className=" w-11/12">
                <Col xl={6} className="">

                    <p className='text-3xl m-0 p-0'>Education</p>
                    Bachelor of Science in Computer Science at University of California, Riverside,
                    <p className="text-3xl m-0 p-0">Relevant Coursework</p>
                    <div className="flex justify-evenly items-center">
                        Data Structures, Discrete Mathematics, Embedded Systems, Machine Organization, Software Construction, Linear Algebra, Calculus II, Logic Design
                    </div>
                </Col>
                <Col xl={6} className="">
                    <div>
                        <p className="text-3xl m-0 p-0">Technical Skills</p>
                        Python,
                        C++,
                        Javascript,
                        Typescript,
                        HTML,
                        CSS,
                        Go
                    </div>
                    <div>
                        <p className="text-3xl m-0 p-0">Developer Tools</p>
                        VS Code,
                        PyCharm,
                        Git & Github,
                        PyTest,
                        GTest,
                        QMake,
                        CMake,
                        Concourse
                    </div>
                    <div>
                        <p className="text-3xl m-0 p-0">Technologies and Framworks</p>
                        React,
                        Next.js,
                        QT Creator,
                        Firebase,
                        AWS DynamoDB,
                        AWS Lambda Step Functions,
                        Tailwind,
                        GraphQL
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default About