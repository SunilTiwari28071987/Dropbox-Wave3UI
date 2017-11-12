import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import * as Error from './generic/error';
import * as Success from './generic/success';
import * as API from '../api/api';
import DialogBox from './generic/dialogbox'
import {getUserHomePath} from "../reducers/rootreducer";
import store from '../store/store'

class SignUp extends Component {

    /*static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };*/

    constructor(props){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            emailID:"",
            password:""
        };

    }


    /*componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }*/

    renderDialogBox(message){
        return <DialogBox message={message}/>
    }

    signUpAction = (userdata)=>{
        console.log(userdata);
        console.log('Sign Up Action :',this.state);
        if(userdata.firstName!=="" && userdata.lastName!=="" && userdata.emailID!=="" && userdata.password!=="")
        this.handleSignUp(this.state);

    }



    handleSignUp = (userdata) => {
        console.log('handleSubmit');
        API.signUp(userdata)
            .then((response) => {
                //console.log(response);
                //console.log(response.result);
                //Success.successAlert("You have successfully Signed Up...!!!!");
                if (response.status === 200) {
                    console.log(response.result);
                    //this.renderDialogBox("You have successfully Signed Up...!!!!");
                    Success.successAlert("You have successfully Signed Up...!!!!");

                } else if (response.status === 400) {
                    console.log(response.result);
                    this.renderDialogBox("Sorry, Your Sign Up has failed...!!!!");
                    Error.errorAlert("Sorry, Your Sign Up has failed...!!!!");
                }
            });
        let filePath = getUserHomePath(store.getState().UserDetailsReducer)
        const filePath1 = {filePath :filePath};
        API.setFilePath(filePath1)
            .then((status) => {
                console.log("Got the response");
            });
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-10 col-md-10 col-lg-10">
                        <div className="panel panel-primary">
                            <div className="panel-heading">Sign Up</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-4 col-md-4 col-lg-4">First Name</label>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <input type="text" className="form-control" name="firstName" required="true"
                                                   id="firstName" placeholder="First Name" value={this.state.firstName}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           firstName: event.target.value
                                                       });
                                                   }}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 col-md-4 col-lg-4">Last Name</label>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <input type="text" className="form-control" name="lastName" required="true"
                                                   id="lastName" placeholder="Last Name" value={this.state.lastName}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           lastName: event.target.value
                                                       });
                                                   }}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 col-md-4 col-lg-4">Email ID</label>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <input type="email" className="form-control" name="emailID" required="true"
                                                   id="emailID" placeholder="Email ID" value={this.state.emailID}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           emailID: event.target.value
                                                       });
                                                   }}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 col-md-4 col-lg-4">Password</label>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <input type="password" className="form-control" required="true"
                                                   name="password" id="password" placeholder="Password" value={this.state.password}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           password: event.target.value
                                                       });
                                                   }}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div
                                            className="col-xs-offset-6 col-sm-offset-6 col-md-offset-6 col-lg-offset-6">
                                            <button type="button" className="btn btn-primary" onClick={() => this.signUpAction(this.state)}>Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;