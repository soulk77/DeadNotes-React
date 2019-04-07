import React, { Component } from 'react';
import ModalButtons from "./ModalButtons";


class MainTasks extends Component{

    constructor(props){
        super(props);
        this.state ={
            currentTask: {}
        }
        this.handleTask = this.handleTask.bind(this);
    }

    

    handleTask(k){
        console.log(k)
        this.setState({
            currentTask: k
        });
    }



    render(){
        const tasks = this.props.list;
        return(
            <React.Fragment>
                <div className="row  justify-content-center">
                    {Object.keys(tasks).map( k =>{
                        return(
                            <button className="bubble2 mr-1 my-3" key = {k} data-toggle="modal" data-target="#task-modal"
                             onClick={()=>this.setState({
                                currentTask: tasks[k]
                             })} >
                                <p class="txt_tittle mb-1">{tasks[k].taskTitle}</p>
                                <p class="txt_user font-italic mb-0 mt-2">{tasks[k].username}</p>
                            </button>
                        )
                    })}
                </div> 
                <Modal2  task = {this.state.currentTask} creator = {this.props.creator} />
            </React.Fragment>  
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
                 <button className="btn btn-outline-info w-100" data-toggle="modal"
                          data-target="#addUserModal">Add User</button>
            </li>
            <li>
                 <button className="btn btn btn-outline-warning w-100 mt-2" disabled>Leave Group</button>
            </li>            
            <li>
                 <button className="btn btn-outline-danger w-100 mt-2" data-toggle="modal"
                          data-target="#dismissUserModal">Dismiss User</button>
            </li>

            </React.Fragment>
        );
    }else {
        return(
            <React.Fragment>
                <li>
                    <button className="btn btn-outline-info w-100" disabled>Add User</button>
                </li>
                <li>
                    <button className="btn btn btn-outline-warning w-100 mt-2" data-toggle="modal"
                          data-target="#LeaveModal">Leave Group</button>
                </li>                
                <li>
                    <button className="btn btn-outline-danger w-100 mt-2" disabled>Dismiss User</button>
                </li>

            </React.Fragment>
        );
    }

}

export const Modal2 = props =>{
    const task = props.task;   
        return(
            <React.Fragment>
                {Object.keys(task).map(k =>{
                    return( 
                            <div className="modal fade" id="task-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" 
                                    key = {k}>
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{task.taskTitle}</h5>
                                        <h5 className="modal-title ml-auto" id="exampleModalLabel">{task.deadline}</h5>
                                        <button type="button" className="close ml-3" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                        <div className="modal-body">
                                        <div className="container mt-0">
                                            <div className="row">
                                                {/* {task.assignedUser.username} */}
                                            </div>
                                            <div className="row mt-3 text-break">
                                                {task.task}
                                                {/* {task.task.valeuOf()} */}
                                            </div>
                                        </div>
                                        </div>
                                        <div className="modal-footer">
                                        <ModalButtons creator = {props.creator} />
                                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                                        <button type="button" className="btn btn-success" data-dismiss="modal">Completed</button> */}
                                        </div>
                                    </div>
                                </div>
                             </div>
                          );
                  })}
        </React.Fragment>
        );
    // }
}  