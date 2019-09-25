import React, { Component } from 'react'
import diagram from '../img/diagram.png'
import './Diagram.css'
export default class  extends Component {
    render() {
        return (
            <div className="diagram d-flex bg-white mt-3 py-5 px-3 ">
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
                    <h3 className="text-right pb-1 w-100">گزارش ماهانه</h3>
                    <img src={diagram} alt="" className="w-100"/>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            {/* <label for="inputEmail4">ایمیل</label> */}
                            <input type="email" className="form-control" id="inputEmail4" placeholder="ایمیل"/>
                            </div>
                            <div className="form-group col-md-6">
                            {/* <label for="inputPassword4">رمز عبور</label> */}
                            <input type="password" className="form-control" id="inputPassword4" placeholder="رمز عبور"/>
                            </div>
                        </div>
                        <div className="form-group">
                            {/* <label for="inputAddress">آدرس</label> */}
                            <input type="text" className="form-control" id="inputAddress" placeholder="آدرس"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 m-0">
                            {/* <label for="inputCity">شهر</label> */}
                            <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-6 m-0">
                            {/* <label for="inputState">موقعیت</label> */}
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-2">ورود</button>
                    </form>
                </div>
            </div>
        )
    }
}
