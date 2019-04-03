import React, { Component } from 'react';
import {GroupUsersSelect , Buttons, GroupUsersLi}  from "./MainTasks";

class Foot extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <FootButtons />
                <ClearModal />
                <AddWithDate groupUsers = {this.props.list} />
                <AddWithoutDate groupUsers = {this.props.list} />
            </React.Fragment>
        );
    }
}

const FootButtons = props =>{

    return(
            <React.Fragment>
                <div className="one column col-3">
                    <button className="btn btn-outline-light" data-toggle="modal"
                            data-target="#clearModal">clear all</button>
                </div>
                <div className="two column col-3 col-md-6">
                    <button className="btn btn-outline-light" data-toggle="modal"
                        data-target="#addModal">add</button>
                </div>
                <div className="one column col-3">
                    <button className="btn btn-outline-light" data-toggle="modal"
                        data-target="#addModal2">add</button>
                </div>
            </React.Fragment>
    );
}
export default Foot;

const ClearModal = props =>{
    return(
        <div className="modal fade" id="clearModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Clear expired-completed Tasks</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        U sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
        </div>        
    );
}

const AddWithDate = props =>{
    return(
            <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Assign new Task</h5>
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="title">Task title</label>
                                    <input type="text" className="form-control" placeholder="Title" id="title" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="task">Task</label>
                                    <textarea className="form-control" id="task" rows="3" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user">Select User</label>
                                    <select className="form-control form-control-sm" id="user">
                                    <GroupUsersSelect  list = {props.groupUsers} />
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="deadline">DeadLine</label>
                                    <input type="date" className="form-control" id="deadline" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">submit</button>
                        </div>
                    </div>
                </div>
            </div>      
    );
}
const AddWithoutDate = props =>{
    return(
            <div className="modal fade" id="addModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Assign new Task</h5>
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title">Task title</label>
                                    <input type="text" className="form-control" placeholder="Title" id="title" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="task">Task</label>
                                    <textarea className="form-control" id="task" rows="3" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user">Select User</label>
                                    <select className="form-control form-control-sm" id="user" >
                                    <GroupUsersSelect  list = {props.groupUsers} />
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">submit</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

