import React, { Component } from 'react'

export default class Statistic extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="col-12 col-md-3 p-0 px-2">
                <div className="panel  d-flex b-shadow ">
                    <div className="col-5 d-flex align-items-center justify-content-center p-0  position-reletive">
                        <img src={this.props.color} alt="" className="w-100"/>
                        <img src={this.props.sIcon} alt="" className="position-absolute"/>
                    </div>
                    <div className="col-7 bg-white p-0 py-1 d-flex flex-column justify-content-center">
                        <h3 className="m-0 font-weight-normal">{this.props.quantity}</h3>
                        <h6 className="m-0 font-weight-normal">{this.props.content}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
