import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect className='flex justify-between items-center' expand='lg'>
            <Navbar.Brand>
                <Link href='/' passHref>
                    <Nav.Link eventKey='1'>
                     poggers
                    </Nav.Link>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-nav' />
            <Navbar.Collapse id='navbar-nav'>
                <Nav className='ml-auto mb-2 mb-lg-0 no-underline'>
                    <Link href='#about' passHref>
                        {/* <Nav.Link
                            className='ml-auto '
                            eventKey='2'
                        > */}
                            about
                        {/* </Nav.Link> */}
                    </Link>
                    <Link href='#projects' passHref>
                        {/* <Nav.Link
                            className='ml-auto '
                            eventKey='3'
                        > */}
                            projects
                        {/* </Nav.Link> */}
                    </Link>
                    <Link href='#resume' passHref>
                        {/* <Nav.Link
                            className='ml-auto '
                            eventKey='4'
                        > */}
                            resume
                        {/* </Nav.Link> */}
                    </Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation