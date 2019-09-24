import React, { Component } from 'react'
import './Navbar.css'
import bell from '../img/bell.png'
import user from '../img/user.png'
import mail from '../img/mail-black-envelope-symbol.png'
import logout from '../img/logout.png'
import Icon from './Icon'
export default class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg d-flex flex-wrap navbar-light bg-white p-0 b-shadow">
                     <div className="part1 col-12 col-md-2 w-100 align-items-center">
                        <a className="navbar-brand font-weight-bold" href="#">{this.props.logo}</a>
                    </div>
                    <div className="part2 col d-flex justify-content-end pt-4 pt-md-0">
                        <Icon navicon={mail} number="3" />
                        <Icon navicon={bell} number="3" />
                    </div>
                        <div className="pr-4">
                            <img src={logout} alt=""/>
                        </div>
                        <div className="w-25 ">
                            <img src={user} alt=""/>
                        </div>
                    
                </nav>
            </div>
        )
    }
}
