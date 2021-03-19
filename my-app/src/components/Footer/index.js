import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './css/style.css'
import logo from './logo1.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer_text">
                    <p>地 址：</p>
                    <p>電 話：</p>
                    <p>傳 真：</p>
                </div>
            </div>
        )
    }
}
