import React, { useState } from 'react'
import { Head } from './Head'
import { navlink } from '../../data'
import { Link } from 'react-router-dom'
import { Menu } from "@mui/icons-material"
import HeadTop from './HeadTop'

function Header() {

    const [click, setclik] = useState(false)
    return (
        <>
            <HeadTop />
            <Head />
            <header>
                <nav className={click ? "moble-nav" : 'flexsb'}>
                    <div className='flexsb'> {navlink.map((item, i) => (
                        <ul className='list '>
                            <li ><Link to={item.url}>{item.text}</Link></li>
                        </ul>
                    ))}
                    </div>
                    <div className="start">
                        <div className="button">Plan for individuals</div>
                    </div>
                    <div className='toggle'>
                        <button onClick={() => (setclik(!click))}><i ><Menu /></i></button>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Header