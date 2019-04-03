import React, { Component } from 'react';
// import { UserContext } from '../UserContext';


class MainTasks extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const tasks = this.props.list;
        return(
            <div className="row  justify-content-center">
                {Object.keys(tasks).map( k =>{
                    return(
                        <button className="bubble2 mr-1 my-3" key = {k}>
                            <p className="txt">{tasks[k].taskTitle}</p>
                        </button>
                    )
                })}
            </div>
        )
    }
}
export default MainTasks;
 
export const GroupUsersLi = props =>{
    let users = props.list;
    return(
        <div>
            {Object.keys(users).map(k =>{
                return (
                    <li className="ml-3" key={k}>{users[k].username}</li>
                );
            })}
        </div>
    );
}

export const GroupUsersSelect = props =>{
    let users = props.list;
    return(
        <React.Fragment>
            {Object.keys(users).map(k =>{
                return (
                       <option key={k}> {users[k].username} </option>
                   );
            })}
        </React.Fragment>
    );
}





export const Buttons = props => {
    let creator = props.creator;
    let user = localStorage.getItem('username');

    if (creator === user){
        return(
            <React.Fragment>
            <li>
                 <button className="btn btn-info w-100" data-toggle="modal"
                          data-target="#addUserModal">Add User</button>
            </li>
            <li>
                 <button className="btn btn btn-outline-warning w-100 mt-2" disabled>Leave Group</button>
            </li>            
            <li>
                 <button className="btn btn-danger w-100 mt-2" data-toggle="modal"
                          data-target="#dismissUserModal">Dismiss User</button>
            </li>

            </React.Fragment>
        );
    }else {
        return(
            <React.Fragment>
                <li>
                    <button className="btn btn-info w-100" disabled>Add User</button>
                </li>
                <li>
                    <button className="btn btn btn-outline-warning w-100 mt-2" data-toggle="modal"
                          data-target="#LeaveModal">Leave Group</button>
                </li>                
                <li>
                    <button className="btn btn-danger w-100 mt-2" disabled>Dismiss User</button>
                </li>

            </React.Fragment>
        );
    }


}