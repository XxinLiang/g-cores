import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import logoImg from './logo.png'

class Header extends Component {
    render() {
        return (
            <header className="g_hd">
                <div className="g_ct">
                    <Link to="/" className="logo">
                        <img src={logoImg} alt="" />
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header;
