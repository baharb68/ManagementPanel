import React, {Component} from 'react';
import home from '../img/home.png';
import report from '../img/report.png';
import role from '../img/role.png';
import setting from '../img/setting.png';
import component from '../img/component.png';
import question from '../img/question.png';
import user from '../img/user2.png';
import event from '../img/event.png';
import Li from './Li'


class Sidebar extends Component {
    render() { 
        return (
            <div className="sidebar d-flex flex-column align-items-start pt-3 h-100 ">
                <div className="d-flex flex-column align-items-start w-100">
                    <ul className="nav  align-items-start p-0 w-100 ">
                        <Li icon={home} link="داشبورد" />
                        <Li icon={user} link="کاربران" />
                        <Li icon={component} link="بخش ها" />
                        <Li icon={role} link="نقش ها" />
                        <Li icon={question} link="درخواست ها" />
                        <Li icon={report} link=" گزارش دوره ای" />
                        <Li icon={event} link="رخدادها / هشدارها " />
                        <Li icon={setting} link="تنظیمات" /> 
                    </ul>
                </div>
            </div>

        );
    }
}
export default Sidebar;
