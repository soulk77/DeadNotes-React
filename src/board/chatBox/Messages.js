import React, { Component } from 'react';



class Messages extends Component{

    constructor(props){
        super(props);
    }


    render(){
        let messages = this.props.messages;
        let activeUser = localStorage.getItem('username');
        return(
            <React.Fragment>
                {Object.keys(messages).map( k =>{
                    if(messages[k].sender.username === activeUser){
                        return(
                                <li className="msg_send" key={k}>
                                    <p><span className="msg-headers">you</span><br/>
                                    {messages[k].message}<br/>
                                    <span className="msg-headers">{messages[k].time}</span></p>
                                </li>         
                        );              
                    }else{
                        return(
                            <li className="msg" key={k}>
                                <p><span className="msg-headers">{messages[k].sender.username}</span><br/>
                                {messages[k].message}<br/>
                                <span className="msg-headers">{messages[k].time}</span></p>
                            </li>   
                        );
                    }
                })}
                {/* <li className="msg">
                    <p><span className="msg-headers">name</span><br/>
                    pok boy m wewef wefwf<br/>
                    <span className="msg-headers">2000/00/00 12:12:12</span></p>
                </li>
                <li className="msg">
                    <p><span className="msg-headers">name</span><br/>
                    pok boy m wewef wefwf<br/>
                    <span className="msg-headers">2000/00/00 12:12:12</span></p>
                </li>
                <li className="msg_send">
                    <p><span className="msg-headers">name</span><br/>
                    pok boy m wewef wefwf<br/>
                    <span className="msg-headers">2000/00/00 12:12:12</span></p>
                </li>
                <li className="msg">
                    <p><span className="msg-headers">name</span><br/>
                    pok boy m wewef wefwf<br/>
                    <span className="msg-headers">2000/00/00 12:12:12</span></p>
                </li>
                <li className="msg">
                    <p><span className="msg-headers">name</span><br/>
                    pok boy m wewef wefwf<br/>
                    <span className="msg-headers">2000/00/00 12:12:12</span></p>
                </li> */}
             </React.Fragment>
        );
    }
}
export default Messages;