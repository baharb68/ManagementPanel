import React, { Component } from 'react'
import './Navbar.css'
import bell from '../img/bell.png'
import user from '../img/user.png'
import mail from '../img/mail-black-envelope-symbol.png'
import logout from '../img/logout.png'
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
                    <div className="part2 col-12 col-md-5 d-flex justify-content-start pr-4 pt-4 pt-md-0">
                        <div className="position-relative ml-4">
                            <img src={mail} alt=""/>
                            <span className="badge badge-danger position-absolute">3</span>
                        </div>
                        <div className="position-relative mr-4">
                            <img src={bell} alt=""/>
                            <span className="badge badge-danger position-absolute">3</span>
                        </div>
                    </div>
                    <div className="part3 col-12 col-md-5 d-flex justify-content-center align-items-start pr-0 pt-2 pt-md-0">
                        <div className="pr-4">
                            <img src={logout} alt=""/>
                        </div>
                        <div className="w-25 ">
                            <img src={user} alt="" className="w-75"/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
