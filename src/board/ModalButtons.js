import React, { Component } from 'react';

class ModalButtons extends Component {

    constructor(props){
        super(props);
    }


    render(){
        let creator = this.props.creator;
        let user = localStorage.getItem('username');
        let assignedUser = this.props.assignedUser;
        console.log(user);
        console.log(assignedUser);


        if(user === creator ){
            return(
                <React.Fragment>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal">Completed</button>
                </React.Fragment>
              );
        }else if(user === assignedUser){
            return(
                <React.Fragment>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success" data-dismiss="modal">Completed</button>
                </React.Fragment>
              );
        }else{
            return(
                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> 
            );
        }
    }
    

}
export default ModalButtons;