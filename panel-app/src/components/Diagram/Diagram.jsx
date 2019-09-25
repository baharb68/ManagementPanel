import React, { Component } from 'react'
export default class  extends Component {
    render() {
        return (
            <div className="diagram bg-white mt-3 p-5 ">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">ایمیل</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="ایمیل"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4">رمز عبور</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="رمز عبور"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">آدرس</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="آدرس"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 m-0">
                        <label for="inputCity">شهر</label>
                        <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-4 m-0">
                        <label for="inputState">موقعیت</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div className="form-group col-md-2 m-0">
                        <label for="inputZip">زیپ</label>
                        <input type="text" className="form-control" id="inputZip"/>
                        <button type="submit" className="btn btn-primary">ورود</button>

                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">ورود</button>
                </form>
            </div>
        )
    }
}
