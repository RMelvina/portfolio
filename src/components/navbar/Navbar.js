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
      
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href='/'>Melvina's Portfolio</a>
                <button className="navbar-toggler" onClick={this.handleClick} type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {NavMenuItems.map ((items, index) => {
                            return(
                                <li key={index} className="nav-item">
                                    <a className={items.cName} href={items.url}>
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
