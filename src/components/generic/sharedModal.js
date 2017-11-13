import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class ModalBox extends React.Component {
    constructor(props) {
        super();

        console.log("Inside Modal dialog box",props);
        this.state = {
            modalIsOpen: props.modalState,
            emailID:""
        };

        //https://github.com/reactjs/react-modal
        //https://daveceddia.com/open-modal-in-react/
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submitModal = this.submitModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    submitModal(emailID) {
        console.log("Inside submit modal function",emailID);
        console.log(this.state);
        emailID ? this.props.sharingFolder(emailID) : null;

        this.props.onClick();
        this.closeModal();
    }

    closeModal() {
        this.props.onClick();
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-12 col-md-12 col-lg-12">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">Dropbox</div>
                                    <div className="panel-body">
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <label className="col-sm-5 col-md-5 col-lg-5">User Name </label>
                                                <div className="col-sm-7 col-md-7 col-lg-7">
                                                    <input type="text" className="form-control" name="folderNmae" required="true"
                                                           id="folderName" placeholder="Enter Email" value={this.state.emailID}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   emailID: event.target.value

                                                               });
                                                           }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-offset-2 col-sm-2">

                                                        <button type="button" className="btn btn-primary" onClick={()=> {this.submitModal(this.state.emailID)}}>OK</button>
                                                    </div>
                                                    <div className=" col-sm-offset-2  col-sm-2">
                                                        <button type="button" className="btn btn-primary" onClick={this.closeModal}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </div>
        );
    }
}

export default ModalBox;