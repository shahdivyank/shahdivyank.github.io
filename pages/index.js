import React from 'react'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Navigation from '../components/Navigation'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

const Index = () => {
    return (

        <>
            <Navigation />
            <Landing />
            <Resume />
            <Projects/>
            <Footer />
        </>

    )
}

export default Index