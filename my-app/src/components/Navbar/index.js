import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './css/style.css'
import logo from './logo1.png'

export default class Navbar extends Component {
    state = {
        hide: "hide"
    }
    toggleMenu = () => {
        if( this.state.hide === "hide") this.setState({hide: ""})
        else this.setState({hide: "hide"})
    }
    render() {
        return (
            <div className="logo_title">
                <div className="contain">
                    <i 
                        className="fa fa-bars"
                        onClick = { this.toggleMenu }
                    />
                    <div className="nav-title">

                        <Link to="/" >
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="nav-title_1">
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    title="fb"
                                    href="https://www.facebook.com/110newtaipei/"
                                >                               
                                    <i
                                        className="fa fa-facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    title="fb"
                                    href="#"
                                >                               
                                    <i
                                        className="lni lni-line"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    title="fb"
                                    href="#"
                                >                               
                                    <i
                                        className="fa fa-envelope"
                                    />
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className={`nav-menu ${this.state.hide}`}>
                        <ul>
                            {/* <li>
                                <i
                                    className="fa fa-close"
                                    onClick = { this.toggleMenu }
                                />
                            </li> */}
                            <li>
                                <NavLink 
                                    exact to="/"
                                    onClick = { this.toggleMenu }
                                >關於我們</NavLink>
                                <ul>
                                    <li>                                        
                                        <NavLink 
                                            to="#"
                                                onClick = { this.toggleMenu }
                                            >ADD+
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about"
                                    onClick = { this.toggleMenu }
                                >About</NavLink>
                                <ul>
                                    <li>                                        
                                        <NavLink 
                                            to="#"
                                                onClick = { this.toggleMenu }
                                        >ADD+
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact"
                                    onClick = { this.toggleMenu }
                                >Contact</NavLink>
                                <ul>
                                    <li>                                        
                                        <NavLink 
                                            to="#"
                                                onClick = { this.toggleMenu }
                                        >ADD+
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink 
                                    to="/login"
                                    onClick = { this.toggleMenu }
                                >LogIn</NavLink>
                                <ul>
                                    <li>
                                        <NavLink 
                                            to="#"
                                            onClick = { this.toggleMenu }
                                        >ADD+
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink 
                                    to="/signup"
                                    onClick = { this.toggleMenu }
                                >SignUp</NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
