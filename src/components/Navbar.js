import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect';

export class Navbar extends Component {
    static propTypes = {
        toggleTheme: PropTypes.func.isRequired,
        theme: PropTypes.string.isRequired
    }

    navbarStyle = {
        navLightTheme: {
            backgroundColor: '#efefef',
            color: 'black',
            '--bs-navbar-color': 'black',
            '--bs-navbar-brand-color': 'black',
            '--bs-navbar-hover-color': '#A3C7D6',
            '--bs-navbar-brand-hover-color': '#A3C7D6',
        },
        navDarkTheme: {
            backgroundColor: '#03001C',
            color: '#ECF9FF',
            '--bs-navbar-color': '#ECF9FF',
            '--bs-navbar-brand-color': '#ECF9FF',
            '--bs-navbar-hover-color': '#B9F3E4',
            '--bs-navbar-brand-hover-color': '#B9F3E4',
        },
        dropdownLightTheme: {
            '--bs-dropdown-link-hover-color': '#A3C7D6'
        },
        dropdownDarkTheme: {
            '--bs-dropdown-bg': '#18122B',
            '--bs-dropdown-link-color': '#ECF9FF',
            '--bs-dropdown-link-hover-color': '#B9F3E4',
            '--bs-dropdown-link-hover-bg': '#393053'
        }
    }

    render() {
        return (
            <nav className={`navbar navbar-expand-lg fixed-top navbar-${this.props.theme}`}
                style={this.props.theme === 'light' ? this.navbarStyle.navLightTheme : this.navbarStyle.navDarkTheme}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={this.props.theme==='light'?'noBackgroundDark.png':'noBacgroundLight.png'} 
                        alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu"
                                    style={this.props.theme === 'light' ? this.navbarStyle.dropdownLightTheme : this.navbarStyle.dropdownDarkTheme}>
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <BrowserView>
                            <div className="d-flex">
                                <div className="p-2">
                                    <button className={`material-symbols-outlined btn btn-outline-${this.props.theme} 
                            text-${this.props.theme === 'light' ? 'dark' : 'light'}`}
                                        onClick={this.props.toggleTheme}>
                                        {this.props.theme === 'light' ? 'dark_mode' : 'light_mode'}
                                    </button>
                                </div>
                                <div className="p-2">
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </BrowserView>
                        <MobileView>
                            <div>
                                <div className="p-2">
                                    <button className={`material-symbols-outlined btn btn-outline-${this.props.theme} 
                            text-${this.props.theme === 'light' ? 'dark' : 'light'}`}
                                        onClick={this.props.toggleTheme}>
                                        {this.props.theme === 'light' ? 'dark_mode' : 'light_mode'}
                                    </button>
                                </div>
                                <div className="p-2">
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </MobileView>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
