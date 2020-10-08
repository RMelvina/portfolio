import React, { Component } from 'react'
import {NavMenuItems} from './NavMenuItems'
import '../styles/MainStyle.css'
import '../styles/Media.css'

export class Navbar extends Component {
    state = ({clicked:false})

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    } 
    render() {
        return (
      
                <nav className="navbar navbar-expand-md  ">
                {/* <a className="navbar-brand">Melvina's Portfolio</a> */}
                <button className="navbar-toggler" onClick={this.handleClick} type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <i className={`${this.state.clicked ? 'fa fa-times' : 'fa fa-bars'} font-color`}></i>
                </button>

                <div className="collapse navbar-collapse justify-content-center " id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                        {NavMenuItems.map ((items, index) => {
                            return(
                                <li key={index} className="nav-item navbar-links">
                                    <a className={`${items.cName} navbar-link`} href={items.url}>
                                        {items.title}
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
               

                </nav>
         
        )
    }
}

export default Navbar
