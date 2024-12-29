import React from "react"
import CourseCard from "./CourseCard"
import "./course.css"


const Course = () => {
    return (
        <>
            <section className='course'>
                <h2>Our Online Courses</h2>
                <div className='container grid2'>

                    <CourseCard />

                </div>



            </section>
        </>
    )
}

export default Course