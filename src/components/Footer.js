import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {

    footerStyle = {
        footerLightTheme: {
            color: '#212529',
            '--bs-link-hover-color': '#A3C7D6'
        },
        footerDarkTheme: {
            color: '#ECF9FF',
            '--bs-link-hover-color': '#B9F3E4'
        }
    }

    render() {
        return (
            <div>
                <footer class={`d-flex flex-wrap justify-content-between align-items-center py-3 border-top`}>
                    <p class="col-md-4 mb-0" style={this.props.theme==='light' ? this.footerStyle.footerLightTheme:this.footerStyle.footerDarkTheme}>© 2023 NewsScope, Inc</p>

                    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img src={this.props.theme === 'light' ? 'noBackgroundDark.png' : 'noBacgroundLight.png'}
                            alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    </a>

                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><Link to="/" class="nav-link px-2 footerLink" style={this.props.theme==='light' ? this.footerStyle.footerLightTheme:this.footerStyle.footerDarkTheme}>Home</Link></li>
                        <li class="nav-item"><Link to="/about" class="nav-link px-2 footerLink" style={this.props.theme==='light' ? this.footerStyle.footerLightTheme:this.footerStyle.footerDarkTheme}>About</Link></li>
                    </ul>
                </footer>
            </div>
        )
    }
}
