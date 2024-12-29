import React from 'react'
import Hero from './hero/Hero'
import { Services } from '../pagess/Services'
import Course from '../pagess/course/Course'
import { Counter } from '../pagess/Counter'
import Footer from '../common/footer/Footer'
import Faq from '../pagess/Faq'

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Course />
            <Counter />
            <Footer />
        </>
    )
}

export default Home