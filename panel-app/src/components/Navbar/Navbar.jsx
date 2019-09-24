import React, { Component } from 'react'
import './Navbar.css'
import bell from '../img/bell.png'
import logout from '../img/logout.png'
import mail from '../img/mail-black-envelope-symbol.png'
import menu from '../img/menu.png'
import Icon from './Icon'
import user from '../img/user.png'
import Button from './Button'
export default class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg d-flex flex-wrap navbar-light bg-white p-0 b-shadow py-2">
                     <div className="part1 col-2 w-100 align-items-center text-right">
                        <a className="navbar-brand font-weight-bold m-0" href="#">{this.props.logo}</a>
                    </div>
                    <div className="part2 col d-flex justify-content-end pt-4 pt-md-0">
                        <Icon navicon={mail} number="3" />
                        <Icon navicon={bell} number="3" />
                    </div>
                    <div class="btn-group dropright ml-4">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <img src={menu} alt=""/>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <Button dropdowntext="بهاره باقری" dropdownIcon={user} />
                            <Button dropdowntext="خروج" dropdownIcon={logout} />
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
