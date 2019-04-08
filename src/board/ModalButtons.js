import React, { Component } from 'react';
import $ from 'jquery';

class ModalButtons extends Component {

    constructor(props){
        super(props);
        this.$modalDOMElem = null;
        this.modalMounted = this.modalMounted.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
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
    
    markCompleted() {
        this.$modalDOMElem.modal('hide');
        console.log('completed');
        this.setState({modalVisible:false});
    }


    render(){
        let creator = this.props.creator;
        let user = localStorage.getItem('username');
        let assignedUser = this.props.task.assignedUser.username;
        // let task_id = this.props.task.task_id;

        if(user === creator ){
            return(
                <React.Fragment>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={this.modalMounted}>Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                    <button type="button" className="btn btn-success" onClick={this.markCompleted} ref={this.modalMounted}>Completed</button>
                </React.Fragment>
              );
        }else if(user === assignedUser){
            return(
                <React.Fragment>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={this.modalMounted}>Close</button>
                    <button type="button" className="btn btn-success" onClick={this.markCompleted} ref={this.modalMounted}>Completed</button>
                </React.Fragment>
              );
        }else{
            return(
                 <button type="button" className="btn btn-secondary" ref={this.modalMounted} ref={this.modalMounted}>Close</button> 
            );
        }
    }
    

}
export default ModalButtons;