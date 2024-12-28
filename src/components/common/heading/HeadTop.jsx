import React from 'react'
import "./header.css"
import { Mail, Call } from "@mui/icons-material"

export default function HeadTop() {
    return (
        <>
            <div className="headTOP flexsb">
                <div className="left flexa ">
                    <i><Mail /></i> <label>example@gmail.com</label>
                    <i> <Call /></i> <label>+94 77 123 3456</label>
                </div>
                <div className="right">
                    <label>HELP & FAQS</label>
                </div>
            </div>
        </>
    )
}