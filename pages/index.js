import React from 'react'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Navigation from '../components/Navigation'
import Projects from '../components/Projects'
import About from '../components/About'
import Workshops from '../components/Workshops'

const Index = () => {
    return (

        <>
            <Navigation />
            <Landing />
            <About />
            <Experiences />
            <Projects/>
            <Workshops />
            <Footer />
        </>

    )
}

export default Index