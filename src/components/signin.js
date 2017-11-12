import React, {Component} from 'react';
import * as API from '../api/api';
import { withRouter } from 'react-router-dom';
import DialogBox from './generic/dialogbox'
import * as Success from './generic/success';
import * as Error from './generic/error';
import * as UserActions from '../actions/userActions'




class SignIn extends Component {

    /*static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };
    */

    constructor(props){
        super();
        this.state = {
            emailID: "",
            password: ""
        };

    }

    signInAction = (userdata)=>{
        console.log(userdata);
        console.log('SignInAction :',this.state);
        if(userdata.emailID!=="" && userdata.password!=="")
        this.handleSignIn(this.state);
    }


    renderDialogBox(message){
        return <DialogBox message={message}/>
    }

    handleSignIn = (userdata) => {
        console.log('handleSubmit');
        API.signIn(userdata)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.result);
                    Success.successAlert("You have successfully Signed In...!!!!");
                    this.props.history.push("/inbox");
                    console.log("reading response from node..")
                    console.log(response)
                    API.setFilePath({filePath:'./public/uploads'}).then((response) => {
                        if (response.status === 200) {
                            console.log(response.result);
                        }
                        else if (response.status === 400 || response.status === 500) {
                            console.log(response.result);
                            //this.renderDialogBox("Sorry, Your Sign In has failed...!!!!");
                            Error.errorAlert("Sorry, Your Sign In has failed...!!!!");
                        }});

                    console.log(response.data.firstName,response.data.lastName,response.data.emailID,response.data.age,response.data.gender, response.data.password, response.data.files);
                    UserActions.signingIn(response.data.firstName,response.data.lastName,response.data.emailID,response.data.age,response.data.gender,response.data.password, response.data.files );
                }
                else if (response.status === 400 || response.status === 500) {
                    console.log(response.result);
                    //this.renderDialogBox("Sorry, Your Sign In has failed...!!!!");
                    Error.errorAlert("Sorry, Your Sign In has failed...!!!!");
                }
            });
    };


    /* componentWillMount(){
         this.setState({
             username: '',
             password: ''
         });
     }*/

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-10 col-md-10 col-lg-10">
                        <div className="panel panel-primary">
                            <div className="panel-heading">Sign In</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-4 col-md-4 col-lg-4">Email ID</label>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <input type="email" className="form-control" name="inputUsername" required="true"
                                                   id="inputUsername" placeholder="Email Id" value={this.state.username}
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
                                                   name="inputPassword" id="inputPassword" placeholder="Password" value={this.state.password}
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
                                            <button type="button" className="btn btn-primary" onClick={() => this.signInAction(this.state)}>Sign In</button>
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

export default withRouter(SignIn);

