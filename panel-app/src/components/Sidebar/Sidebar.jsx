import React, {Component} from 'react';
import './Sidebar.css';
import home from '../img/home.png';
import report from '../img/report.png';
import role from '../img/role.png';
import setting from '../img/setting.png';
import component from '../img/component.png';
import question from '../img/question.png';
import user from '../img/user2.png';
import event from '../img/event.png';


class Sidebar extends Component {
    render() { 
        return (
            <div className="sidebar d-flex flex-column align-items-start pt-3 h-100 ">
                
                <div className="d-flex flex-column align-items-start w-100">
                    <ul className="nav flex-column align-items-start p-0 w-100 ">
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={home} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#">داشبورد</a>
                        </li>
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={user} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#"> کاربران </a>
                        </li>
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={component} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#"> بخش ها</a>
                        </li>
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={role} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#"> نقش ها</a>
                        </li>
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={question} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#"> درخواست ها</a>
                        </li>
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={report} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#"> گزارش دوره ای</a>
                        </li>
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={event} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#"> رخدادها / هشدارها</a>
                        </li>
                        <li className="nav-item mt-2 w-100  py-2  d-flex flex-column align-items-center">
                            <img src={setting} alt="" className="icon pb-1"  />
                            <a className="nav-link" href="#"> تننظیمات</a>
                        </li>
                       
                    </ul>
                </div>
            </div>

        );
    }
}
export default Sidebar;
