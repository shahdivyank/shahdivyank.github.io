import React from 'react'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Navigation from '../components/Navigation'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Workshops from '../components/Workshops'

const Index = () => {
    return (

        <>
            <Navigation />
            <Landing />
            <Resume />
            <Projects/>
            <Workshops />
            <Footer />
        </>

    )
}

export default Index