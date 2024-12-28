import React from "react"
import Typewriter from "typewriter-effect"

const Heading = ({ subtitle, title }) => {
    return (
        <>
            <div id='heading'>
                <h3> <Typewriter
                    options={{
                        strings: [`${subtitle}`],
                        autoStart: true,
                        loop: true,
                    }}
                /> </h3>
                <h1>{title} </h1>
            </div>
        </>
    )
}

export default Heading