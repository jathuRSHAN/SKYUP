import React from "react"
import { social } from '../../data'
import Send from '@mui/icons-material/Send';
import "./footer.css"

const Footer = () => {
    return (
        <>
            <section className='newletter'>
                <div className='container flexsb'>
                    <div className='left row'>
                        <h1>Newsletter - Stay tune and get the latest update</h1>
                        <span>Far far away, behind the word mountains</span>
                    </div>
                    <div className='right row flexsb'>
                        <input type='text' placeholder='Enter email address' />
                        <i><Send /></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container flexa'>
                    <div className='box logo'>
                        <h1>SKYUP</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

                        <div className="social flexa">
                            {social.map((item, i) => (
                                <a href={item.url} className='icon'> <i >{item.icon}</i></a>
                            ))}
                        </div>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Courses</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>
                    <div className='box last'>
                        <h3>Have a Questions?</h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +2 392 3929 210
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                info@yourdomain.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>
                    Copyright ©2022 All rights reserved | This template is made with  by GorkhCoder
                </p>
            </div>
        </>
    )
}

export default Footer