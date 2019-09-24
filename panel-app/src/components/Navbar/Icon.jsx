import React, { Component } from 'react'

export default class Icon extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="position-relative mx-3">
                <img src={this.props.navicon} alt=""/>
                <span className="badge badge-danger position-absolute">{this.props.number}</span>
            </div>
        )
    }
}
