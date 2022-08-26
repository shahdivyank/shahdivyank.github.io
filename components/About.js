import React from 'react'
import { Row, Col } from "react-bootstrap"

const About = () => {
    return (
        <section id="about" className="flex pb-20 justify-center items-center font-lexend flex-col -z-20 bg-gradient-to-b from-purple-500 to-purple-300 ">
            <p className="text-6xl">About Me</p>

            <Row className=" w-11/12">
                <Col xl={12} className="flex justify-center items-center">
                    <p className="text-center text-2xl">Hello there! I am an incoming junior at the University of California, Riverside.
                        Currently I am working with Comcast as a part time employee working with a Dev Ops team to manage
                        various incoming alerts from internet providing devices. Outside the industry and classroom, I love to go
                        on bike rides throughout the city and explore new places. Additionally, I love hiking through local trails
                        and taking time to escape from the city and free myself from all distractions.
                    </p>
                </Col>
                <Col xl={6} className="">
                    <p className='text-3xl m-0 p-0'>Education</p>
                    <p className="text-xl">Bachelor of Science in Computer Science at University of California, Riverside</p>
                    <p className="text-3xl m-0 p-0">Relevant Coursework</p>
                    <div className="flex justify-evenly items-center">
                        <p className="text-xl">Data Structures, Discrete Mathematics, Embedded Systems, Machine Organization, Software Construction, Linear Algebra, Calculus II, Logic Design</p>
                    </div>
                </Col>
                <Col xl={6} className="">
                    <div>
                        <p className="text-3xl m-0 p-0">Technical Skills</p>
                        <p className="text-xl">

                            Python,
                            C++,
                            Javascript,
                            Typescript,
                            HTML,
                            CSS,
                            Go</p>
                    </div>
                    <div>
                        <p className="text-3xl m-0 p-0">Developer Tools</p>
                        <p className="text-xl">
                            VS Code,
                            PyCharm,
                            Git & Github,
                            PyTest,
                            GTest,
                            QMake,
                            CMake,
                            Concourse
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl m-0 p-0">Technologies and Framworks</p>
                        <p className="text-xl">
                            React,
                            Next.js,
                            QT Creator,
                            Firebase,
                            AWS DynamoDB,
                            AWS Lambda Step Functions,
                            Tailwind,
                            GraphQL
                        </p>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default About