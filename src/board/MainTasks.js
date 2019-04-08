import React, { Component } from 'react';
// import ModalButtons from "./ModalButtons";
import MainModal from './MainModal';


class MainTasks extends Component{

    constructor(props){
        super(props);
        this.state ={
            currentTask: {},
            modalVisible: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    
    showModal(task) {
        this.setState({
            currentTask: task,
            modalVisible: true});
    }
    
    hideModal() {
        this.setState({modalVisible:false});
    }
    

    render(){
        let tasks = this.props.list;
        let status = this.props.status;
        return(
            <React.Fragment>
                <div className="row  justify-content-center">
                    {Object.keys(tasks).map( k =>{
                        if(status === 1 || status === 2 ){
                                return(
                                    <button className="bubble2 mr-1 my-3 still-alive" key = {k} 
                                    onClick={()=>{this.showModal(tasks[k])}} >
                                        <p className="txt_tittle mb-1">{tasks[k].taskTitle}</p>
                                        <p className="txt_user font-italic mb-0 mt-2">{tasks[k].assignedUser.username}</p>
                                    </button>
                                );
                        }else if(status === 3){
                            return(
                                <button className="bubble2 mr-1 my-3 dead" key = {k} data-toggle="modal" data-target="#task-modal"
                                onClick={()=>{this.showModal(tasks[k])}} >
                                    <p className="txt_tittle mb-1">{tasks[k].taskTitle}</p>
                                    <p className="txt_user font-italic mb-0 mt-2">{tasks[k].assignedUser.username}</p>
                                </button>
                            );
                        }else if(status === 4){
                            return(
                                <button className="bubble2 mr-1 my-3 completed" key = {k} data-toggle="modal" data-target="#task-modal"
                                onClick={()=>{this.showModal(tasks[k])}} >
                                    <p className="txt_tittle mb-1">{tasks[k].taskTitle}</p>
                                    <p className="txt_user font-italic mb-0 mt-2">{tasks[k].assignedUser.username}</p>
                                </button>
                            );
                        }else{
                            return null;
                        }
                    })}
                </div> 
                <MainModal visible={this.state.modalVisible} onHide={this.hideModal} handler={this.props.handler}
                            task = {this.state.currentTask} creator = {this.props.creator}/>
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

// export const Modal2 = props =>{
//     let task = props.task;   
//     // let user = task.assignedUser.username;
//     // console.log(user);
//     // const assignedUser = props.task.assignedUser.username;
//         return(
//             <React.Fragment>
//                 {Object.keys(task).map(k =>{
//                     return( 
//                             <div className="modal fade" id="task-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" 
//                                     key = {k}>
//                                 <div className="modal-dialog" role="document">
//                                     <div className="modal-content">
//                                         <div className="modal-header">
//                                         <h5 className="modal-title" id="exampleModalLabel">{task.taskTitle}</h5>
//                                         <h5 className="modal-title ml-auto" id="exampleModalLabel">{task.deadline}</h5>
//                                         <button type="button" className="close ml-3" data-dismiss="modal" aria-label="Close">
//                                             <span aria-hidden="true">&times;</span>
//                                         </button>
//                                         </div>
//                                         <div className="modal-body">
//                                         <div className="container mt-0">
//                                             <div className="row">
//                                                 {task.assignedUser.username}
//                                             </div>
//                                             <div className="row mt-3 text-break">
//                                                 {task.task}
//                                                 {/* {task.task.valeuOf()} */}
//                                             </div>
//                                         </div>
//                                         </div>
//                                         <div className="modal-footer">
//                                         <ModalButtons creator = {props.creator} assignedUser = {props.assignedUser} />
//                                         {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                         <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
//                                         <button type="button" className="btn btn-success" data-dismiss="modal">Completed</button> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                              </div>
//                           );
//                   })}
//         </React.Fragment>
//         );
//     // }
// }  