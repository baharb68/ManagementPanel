import React, { Component } from 'react'

export default class button extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button class="dropdown-item d-flex align-items-center py-2 text-right" type="button">
                <img src={this.props.dropdownIcon} alt=""/>
                <h6 className="pr-2">{this.props.dropdowntext}</h6>
            </button>
        )
    }
}
