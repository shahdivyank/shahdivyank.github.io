import React from 'react'
import { Row, Col } from "react-bootstrap"

const Resume = () => {
    return (
        <section id="resume" className="flex justify-center items-center font-lexend flex-col bg-gradient-to-b -z-20 from-orange-300 to-amber-300 ">
            <p className="text-6xl">Resume</p>

            <Row className=" w-11/12">
                <Col xl={6} className="">

                    <p className='text-3xl'>Education</p>
                    Bachelor of Science in Computer Science at University of California, Riverside,
                    <p className="text-3xl">Relevant Coursework</p>
                    <div className="flex justify-evenly items-center">
                        Data Structures, Discrete Mathematics, Embedded Systems, Machine Organization, Software Construction, Linear Algebra, Calculus II, Logic Design,
                    </div>
                </Col>
                <Col xl={6} className="">
                    <div>
                        <p className="text-3xl">Technical Skills</p>
                        Python,
                        C++,
                        Javascript,
                        Typescript,
                        HTML,
                        CSS,
                        Go
                    </div>
                    <div>
                        <p className="text-3xl">Developer Tools</p>
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
                        <p className="text-3xl">Technologies and Framworks</p>
                        React,
                        Next.js,
                        QT Creator,
                        Firebase,
                        AWS DynamoDB,
                        AWS Lambda Step Functions,
                        Tailwind,
                        GraphQL,
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Resume