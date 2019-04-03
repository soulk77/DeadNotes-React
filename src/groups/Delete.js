import React, { Component } from 'react';
import { UserContext } from '../UserContext';

class Delete extends Component{

    constructor(props){
        super(props);
        this.selected = React.createRef();
    }


    render(){
        const groups = this.props.list;
        let handleSubmit = this.props.handleSubmit;
        return(                   
            <div className="row justify-content-center">
                <form  className="form-inline" onSubmit={()=>handleSubmit(this.selected)}>
                    <select className="form-control form-control-sm" ref = {this.selected} >
                    {Object.keys(groups).map( k =>{
                        return(
                            <option key = {k} value={groups[k].id_group}>{groups[k].groupName}</option>
                        );
                    })}                        
                    </select>
                    <button type="submit" className="btn btn-outline-danger btn-sm ml-2">delete</button>
                </form>
            </div>
        );
    }

}

export default Delete;