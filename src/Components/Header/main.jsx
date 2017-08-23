import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './main.css'
import logoImg from './logo.png'

class Header extends Component {
    render() {
        return (
            <header className="g_hd">
                <div className="g_ct fix">
                    <div className={`${style.hd_logo} fix`}>
                        <Link to="/" className={style.logo}>
                            <img src={logoImg} alt="" />
                        </Link>
                    </div>
                    <div className={style.hd_nav}>
                        <div className={style.search}>
                            <input type="text" placeholder="Search"/>
                        </div>
                        <nav className={style.nav}>
                            <ul className="fix">
                                <li><Link to="/news">新闻</Link></li>
                                <li><Link to="/articles">文章</Link></li>
                                <li><Link to="/videos">视频</Link></li>
                                <li><Link to="/gtalk">Gtalk</Link></li>
                                <li><Link to="/platform">平台</Link></li>
                                <li><Link to="/subject">专题</Link></li>
                                <li><Link to="/app">App</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
