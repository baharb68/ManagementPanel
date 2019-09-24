import React, { Component } from 'react'
import './Li.css'

export default class Li extends Component {

        constructor(props){
            super(props);
        }
    
    render() {
        return (
            
           
                <li className="nav-item mt-2 w-100  py-2  d-flex justify-content-start">
                    <a className="nav-link" href="#"><img src={this.props.icon} alt="" className="pl-2"  />{this.props.link}</a>
                </li>
           
        )
    }
}
