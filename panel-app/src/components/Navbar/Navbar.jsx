import React, { Component } from 'react'
import './Navbar.css'
import bell from '../img/bell.png'
import user from '../img/user.png'
import mail from '../img/mail-black-envelope-symbol.png'
import logout from '../img/logout.png'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg d-flex flex-wrap navbar-light bg-white p-0 shadow">
                     <div className="part1 col-12 col-md-2 d-flex flex-row w-100 justify-content-between align-items-center p-0">
                        <a className="navbar-brand m-0 p-3 ml-4" href="#">پنل مدیریت</a>
                        <div className="w-25 ">
                            <img src={user} alt="" className="w-75"/>
                        </div>
                    </div>
                    <div className="part2 col-12 col-md-5 d-flex justify-content-start pr-4 pt-4 pt-md-0">
                        <div className="position-relative ml-4">
                            <img src={mail} alt=""/>
                            <span className="badge badge-primary position-absolute">3</span>
                        </div>
                        <div className="position-relative mr-4">
                            <img src={bell} alt=""/>
                            <span className="badge badge-primary position-absolute">3</span>
                        </div>
                    </div>
                    <div className="part3 col-12 col-md-5 d-flex justify-content-center align-items-start pr-0 pt-2 pt-md-0">
                        <div className="w-75 mr-md-auto">
                            <form className="w-100 ">
                                    <input type="text" className="form-control form-control-sm w-100" placeholder="جستجو..."/>
                            </form>
                        </div>
                        <div className="pr-4">
                            <img src={logout} alt=""/>
                        </div>
                    </div>
                    <div className="col-12 py-2 py-md-0 d-flex justify-content-start">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
