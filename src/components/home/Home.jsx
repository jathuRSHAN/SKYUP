import React from 'react'
import Hero from './hero/Hero'
import { Services } from '../pagess/Services'
import Course from '../pagess/course/Course'

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Course />
        </>
    )
}

export default Home