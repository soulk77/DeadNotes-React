import React, { Component } from 'react';
import { UserContext } from '../UserContext';

export class Bubbles extends Component{

    static contextType = UserContext;

    constructor(props){
        super(props);
        this.forward = this.forward.bind(this);
    }

    forward(e){
        let active = parseInt(e);
        console.log(e);
        localStorage.setItem('activeGroup',e);
        this.props.history.push('/board');
    }

    render(){
        const groups = this.props.list;
        return(
            <div className="row justify-content-center nonono">
            <button className="bubble add" data-toggle="modal" data-target="#exampleModal">
                <i className="fas fa-plus fa-4x"></i>
            </button>
            {Object.keys(groups).map( k =>{
                return (<button className="bubble groups text-center" key = {k} onClick={ ()=>{this.forward(groups[k].id_group)}}>
                            <p>{groups[k].groupName}</p>
                        </button>);
            })}
           </div>   
        );
    }
}

export default Bubbles;