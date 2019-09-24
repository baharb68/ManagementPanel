import React, { Component } from 'react'
import './Navbar.css'
import bell from '../img/bell.png'

import mail from '../img/mail-black-envelope-symbol.png'
import menu from '../img/menu.png'
import Icon from './Icon'
export default class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg d-flex flex-wrap navbar-light bg-white p-0 b-shadow py-2">
                     <div className="part1 col-12 col-md-2 w-100 align-items-center text-right">
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
                            <button class="dropdown-item d-flex align-items-center py-2 text-right" type="button">
                                <img src={this.props.profileIcon} alt=""/>
                                <h6 className="pr-2">{this.props.profileName}</h6>
                            </button>
                            <button class="dropdown-item text-right py-2 font-weight-bold" type="button">خروج </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
