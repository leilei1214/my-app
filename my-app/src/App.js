import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar';
import Router from './components/Router';
import Footer from './components/Footer';

import './css/components/Root/style.css'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Router />
                </main>
                <footer>
                    <Footer/>
                </footer>
            </BrowserRouter>
        )
    }
}