import React from 'react'
import { social } from '../../data'
import "./header.css";

export const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container flexsb">
                    <div className="logo">
                        <img src="./images/logo.png" alt="" />
                        <h3>ONLINE  EDUCATION & LEARNING</h3>
                    </div>
                    <div className="social flexa">
                        {social.map((item, i) => (
                            <a href={item.url} className='icon'> <i >{item.icon}</i></a>
                        ))}
                    </div>
                </div>
                <div className="moble">
                    <h3>ONLINE  EDUCATION & LEARNING</h3>
                </div>
            </section>
        </>
    )
}
