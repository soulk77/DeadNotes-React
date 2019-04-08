import React, { Component } from 'react';
import $ from 'jquery';

class MainModal extends Component{

    constructor(props){
        super(props);
        this.$modalDOMElem = null;
        this.userChoice = false;
        this.modalMounted = this.modalMounted.bind(this);
        this.handleYes = this.handleYes.bind(this);
    }

    modalMounted(refToModal) {
        const hideFun = () => {
           this.props.onHide(this.userChoice); 
        };
        if (refToModal !== null) {
            this.$modalDOMElem = $(refToModal);
            this.$modalDOMElem.modal('show');
            this.$modalDOMElem.on('hidden.bs.modal', hideFun.bind(this));
        }        
    }    
    
    handleYes() {
        this.userChoice = true;
        this.$modalDOMElem.modal('hide');
    }



    render(){
        let task = this.props.task;     
        let creator = this.props.creator;
        if(this.props.visible === true){
            return(
                    <div className="modal fade" id="task-modal" tabIndex="-1" ref={this.modalMounted} >
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
                                        {task.assignedUser.username}
                                    </div>
                                    <div className="row mt-3 text-break">
                                        {task.task}
                                    </div>
                                </div>
                                </div>
                                <div className="modal-footer">
                                {/* <ModalButtons /> */}
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                                <button type="button" className="btn btn-success" onClick={this.handleYes}>Completed</button>
                                </div>
                            </div>
                        </div>
                    </div>
            );
        }else{
            return null;
        }

    }

}
export default MainModal;