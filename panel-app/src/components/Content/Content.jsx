import React, { Component } from 'react'
import mail from '../img/mail.png'
import shop from '../img/shopping.png'
import user from '../img/user2.png'
import task from '../img/tasks.png'
import blue from '../img/blue.jpg'
import purple from '../img/purple.jpg'
import red from '../img/red.jpg'
import yellow from '../img/yellow.jpg'
import './Content.css'
import Statistic from './Statistic'

export default class Content extends Component {
    render() {
        return (
            <div className="px-md-4 py-md-1 d-flex flex-column flex-md-row">
                <Statistic content="کاربر" quantity="255" sIcon={user} color={blue}/>
                <Statistic content="عملیات" quantity="40" sIcon={task} color={red}/>
                <Statistic content="پیام" quantity="456" sIcon={mail} color={yellow}/>
                <Statistic content="خرید" quantity="30" sIcon={shop} color={purple}/>
                {/* <div className="col-12 col-md-3 py-1 py-md-0">
                    <div className="d-flex flex-column w-100">
                        <img src={user} alt="" className="w-100"/>
                        <div className="user-panel panel w-100 text-white">
                            <h6 className="">کاربر</h6>
                            <h5 className="py-2">255</h5>
                            <img src={evolution} alt="" className="pb-2"/>
                            <div className="text-white py-1 w-100"> 
                                <a href="#" className=" m-0 text-white">اطلاعات بیشتر</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 py-1 py-md-0">
                    <div className="d-flex flex-column w-100">
                        <img src={task} alt="" className="w-100"/>
                        <div className="task-panel panel w-100 text-white">
                            <h6 className="">عملیات</h6>
                            <h5 className="py-2">20</h5>
                            <img src={evolution} alt="" className="pb-2"/>
                            <div className="text-white py-1 w-100"> 
                                <a href="#" className=" m-0 text-white">اطلاعات بیشتر</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 py-1 py-md-0">
                    <div className="d-flex flex-column w-100">
                        <img src={mail} alt="" className="w-100"/>
                        <div className="mail-panel panel w-100 text-white">
                            <h6 className="">پیام</h6>
                            <h5 className="py-2">300</h5>
                            <img src={evolution} alt="" className="pb-2"/>
                            <div className="text-white py-1 w-100"> 
                                <a href="#" className=" m-0 text-white">اطلاعات بیشتر</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 py-1 py-md-0">
                    <div className="d-flex flex-column w-100">
                        <img src={shop} alt="" className="w-100"/>
                        <div className="shop-panel panel w-100 text-white">
                            <h6 className="">خرید</h6>
                            <h5 className="py-2">786</h5>
                            <img src={evolution} alt="" className="pb-2"/>
                            <div className="text-white py-1 w-100"> 
                                <a href="#" className=" m-0 text-white">اطلاعات بیشتر</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
