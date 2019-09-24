import React, { Component } from 'react'
import './Main.css'
import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar'
import Diagram from '../Diagram/Diagram'


export default class Main extends Component {
    render() {
        return (
            <div className="d-flex flex-row">
                <div className=" col-md-2 d-none d-md-block p-0 bg-dark">
                    <div className=" side">
                        <Sidebar />
                    </div>
                </div>
                <div className="col-12 col-md-10 pt-5 px-2">
                    <Content />
                    <Diagram />
                </div>
            </div>
        )
    }
}
