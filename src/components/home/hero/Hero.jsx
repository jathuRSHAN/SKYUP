import React from 'react'
import "./hero.css";
import { hero } from '../../data';
import Heading from '../../common/heading/Heading';
function Hero() {

    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        {hero.map((item, i) => (
                            <>
                                <Heading subtitle={item.name} title={item.title} />
                                <p>{item.des}</p>
                                <div className='button'>
                                    <button className='primary-btn'>
                                        {item.btn1}
                                        {/* <i>{item.icon}</i> */}
                                    </button>
                                    {/* <button>
                                        {item.btn2} <i>{item.icon}</i>
                                    </button> */}
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </section>
            {/* <div className='margin'></div> */}
        </>
    )
}

export default Hero