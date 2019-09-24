import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import user from '../src/components/img/user.png'
import Navbar from '../src/components/Navbar/Navbar';
import Main from '../src/components/Main/Main'

function App() {
  return (
    <div className="App">
        <Navbar logo="پنل مدیریت" profileName="بهاره باقری" profileIcon={user} />
        <Main />
    </div>
  );
}

export default App;
