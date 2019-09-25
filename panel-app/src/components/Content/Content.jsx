import React, { Component } from 'react'
import mail from '../img/mail.png'
import shop from '../img/shopping.png'
import user from '../img/user2.png'
import task from '../img/tasks.png'
import blue from '../img/blue.jpg'
import purple from '../img/purple2.jpg'
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
            </div>
        )
    }
}
