import React, { Component } from 'react';
import "./board.css";
import MainTasks , {GroupUsersSelect , Buttons, GroupUsersLi}  from './MainTasks';
import Foot from "./Foot";
// import { UserContext } from '../UserContext';

class Board extends Component{

    // static contextType = UserContext;

    constructor(props){
        super(props);
        this.state = {
            tasksMain: [],
            groupsUsers: [],
            creator: {}
        }
        this.userToDismiss = React.createRef();
        this.newUser = React.createRef();
        this.addUserToGroup = this.addUserToGroup.bind(this);
        this.dismissUser = this.dismissUser.bind(this);
        this.leaveGroup = this.leaveGroup.bind(this);
    }

    componentDidMount(){
        this.fetchMainTasks();
        this.fetchGroupsUsers();
    }

    fetchMainTasks(){
        let user = localStorage.getItem('username');
        let id = parseInt(localStorage.getItem('activeGroup'));
        window.$.ajax({
            url: 'http://localhost:8080/api/tasks',
            dataType: 'json',                       
            type: 'POST',
            data: {
                username: user,
                id_group: id
            }            
       }).done ( data => {
        //    console.log(data);
           this.setState({
               tasksMain: data
           });
       });
    }

    fetchGroupsUsers(){
        let user = localStorage.getItem('username');
        let id = parseInt(localStorage.getItem('activeGroup'));
        window.$.ajax({
            url: 'http://localhost:8080/api/group/users',
            dataType: 'json',                       
            type: 'POST',
            data: {
                username: user,
                id_group: id
            }            
       }).done ( data => {
        //    console.log(data);
           this.setState({
               groupsUsers: data.userList,
               creator: data.creator
           });
       });
    }
    addUserToGroup() {
        let user = this.newUser.current.value;
        let id = parseInt(localStorage.getItem('activeGroup'));
        if (user) {
            window.$.ajax({
                url: 'http://localhost:8080/api/group/addUser',
                dataType: 'json',
                type: 'POST',
                data: {
                    username: user,
                    id_group: id
                }
            }).done(data => {
                this.setState({
                    groupsUsers: data
                });
            });
        }
    }

    dismissUser(){
        let user = this.userToDismiss.current.value;
        let id = parseInt(localStorage.getItem('activeGroup'));
        if (user) {
            window.$.ajax({
                url: 'http://localhost:8080/api/group/dismissUser',
                dataType: 'json',
                type: 'POST',
                data: {
                    username: user,
                    id_group: id
                }
            }).done(data => {
                console.log(data);
                this.setState({
                    groupsUsers: data
                });
            });
        }
    }

    leaveGroup(){
        let user = localStorage.getItem('username');
        let id = parseInt(localStorage.getItem('activeGroup'));
        if (user) {
            window.$.ajax({
                url: 'http://localhost:8080/api/group/dismissUser',
                dataType: 'json',
                type: 'POST',
                data: {
                    username: user,
                    id_group: id
                }
            }).done(data => {
                console.log(data);
                localStorage.removeItem("activeGroup");
                this.props.history.push('/board');
            });
        }
    }

    render(){
        return(
            <div>
                <div className="wrapper">
                    <nav id="sidebar">
                        <button id="dismiss" className="btn btn-outline-light" onClick={this.collapse1}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div className="sidebar-header">
                            <h3>Sidebar</h3>
                        </div>
                        <ul className="components ml-2">
                            <p>Group Users</p>
                            <GroupUsersLi list = {this.state.groupsUsers} />
                        </ul>
                        <ul className="list-unstyled CTAs">
                            <Buttons creator = {this.state.creator}  addUserToGroup = {this.addUserToGroup} />
                        </ul>
                    </nav>
                    <div id="content">
                        <section >
                            <div>
                                <div  className="container outC mt-0">
                                    <div className="row outR">
                                        <div className="one column col-3 p-0">
                                            <div className="headBee">
                                                <h4>deadlines</h4>
                                            </div>
                                            <div  className="container scrollerBee">
                                                <div className="row  justify-content-center">
                                                    <button className="bubble2 mx-auto my-3 ss">

                                                    </button>
                                                    <div className="bubble2 mx-auto my-3">

                                                    </div>
                                                    <div className="bubble2 mx-auto my-3">

                                                    </div>
                                                    <div className="bubble2 mx-auto my-3">

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="two column col-3 col-md-6">
                                            <div className="headBee headC">
                                                <h4>Due</h4>
                                            </div>
                                            <div className="container scrollerBee mt-4">
                                                <div className="row  justify-content-center">
                                                    <MainTasks list = {this.state.tasksMain} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="one column col-3 p-0">
                                            <div className="headBee">
                                                <h4>for ever</h4>
                                            </div>
                                            <div className="container scrollerBee">
                                                <div className="row  justify-content-center">
                                                    <div className="bubble2 mr-1 my-3">

                                                    </div>
                                                    <div className="bubble2 mr-1 my-3">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                            <div className="container outC mt-3">
                                <div className="row outR">
                                    <div id="clock_div">
                                        <div className="flex-container">
                                            <canvas id="clock" width="90" height="90"></canvas>
                                        </div>
                                    </div>
                                    <Foot  list = {this.state.groupsUsers} />
                                    <div>
                                        <button type="button" id="sidebarCollapse" className="btn btn-outline-light btn-bar" onClick={this.collapse1}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                        <button type="button" id="sidebarCollapse2" className="btn btn-outline-light btn-chat" onClick={this.collapse2}>
                                            <i className="fas fa-comments"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        <section>
                         <div className="modal fade" id="LeaveModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Leave Group</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            U sure?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={this.leaveGroup}
                                             data-dismiss="modal">submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="dismissUserModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Dismiss User From Group</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form >
                                                <div className="form-group">
                                                    <label htmlFor="user">Select User</label>
                                                    <select className="form-control form-control-sm" id="user" ref={this.userToDismiss}>
                                                    <GroupUsersSelect  list = {this.state.groupsUsers} />
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                                onClick={this.dismissUser}>submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="addUserModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add User to Group</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="user">User</label>
                                                    <input type="text" className="form-control" placeholder="username" id="user" required  
                                                           ref={this.newUser}/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={this.addUserToGroup} 
                                                    data-dismiss="modal">submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="">
                        <nav id="sidebar2">
                            <div className="head2">
                                <div id="chat-heading">
                                    <h6>Group Chat</h6>
                                </div>
                                <button id="dismiss2" className="btn btn-outline-light" onClick={this.collapse2}>
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                            <div className="msg_body scroller">
                                <div className="msg">
                                    <p><span className="msg-headers">name | date</span><br/>pok boy m </p>
                                </div>
                            </div>
                            <div className="foot">
                                <textarea name="" id="" cols="40" rows="10" placeholder="type a message"></textarea>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
     collapse1(e){
        let collapse = document.getElementById('sidebar');
        collapse.classList.toggle('active');
     }   
     collapse2(e){
        let collapse = document.getElementById('sidebar2');
        collapse.classList.toggle('active');
     }
}

export default Board;