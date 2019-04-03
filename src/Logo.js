import React, { Component } from 'react';
import "./login/login.css";


class Logo extends Component{

    render(){
        return(
            <div className="container my-0">
            <div className="row p-1 mt-1">
                <img src="/img/LogoMakr_2X1vQz.png" alt="DeadNotes" className="m-auto d-block logo"/>
            </div>
        </div>
        );
    }
}

export default Logo;