import React, { Component } from 'react';
import Content from "./content";
import * as Actions from "../actions/actions";
import * as API from '../api/api';
import './inbox.css';
import { withRouter } from 'react-router-dom';
import RightNavBar from "./rightNavBar";
import LeftNavBar from "./leftNavBar";
import { connect } from 'react-redux'
import * as userdetails from "../reducers/userdetails"
import {store} from "../index"
import {browserHistory} from  'react-router'


class Inbox extends Component {



/*
    componentWillMount() {
        console.log(this.props.emailID)
        var user={emailID:this.props.emailID}
        //this.handleSession(user);

        if (this.props.emailID) {
            this.props.history.push("/inbox");
        }else
        {
            this.props.history.push("/");
        }


    }
*/

    signOutAction = (emailID)=>{
        console.log(emailID);
        var signOutJson = {emailID : emailID};
        this.handleSignOut(signOutJson);
    }


    handleSignOut = (signOutJson) => {
        API.signOut(signOutJson)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Response",response);
                    this.props.signOut();
                    this.props.history.push("/");
                    console.log(response)
                } else if (response.status === 400) {
                    this.props.history.push("/inbox");
                    console.log(response.result);

                }
            });
    };


    render() {

        return (
            <div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <nav className="navbar navbar-default navbar-fixed-side">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <img src={"images/dropbox_inbox_logo.jpg"}/>

                                        </div>
                                        <div className="col-sm-3">

                                        </div>
                                        <div className="col-sm-3">

                                        </div>
                                        <div className="col-sm-3">

                                            <h4 className="right">Welcome {this.props.userName}</h4>
                                            <div className=" col-sm-offset-6 col-sm-6">
                                                <button type="button"
                                                        className="right form-control btn btn-primary"
                                                        name="logout"
                                                        id="logout"
                                                        value="logout"
                                                        onClick={() => this.signOutAction(this.props.emailID)}>

                                                    Sign out
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-2 col-lg-2">
                            <nav className="navbar navbar-default navbar-fixed-side">
                                <div className="row">
                                    <div className="col-sm-offset-4 col-sm-8">
                                        <p><b>Pages</b></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-offset-2 col-sm-8">
                                        <LeftNavBar/>
                                    </div>
                                </div>
                                <div className="row">
                                </div>
                            </nav>
                        </div>
                        <div className="col-sm-8 col-lg-8">
                            <div className="container-fluid">
                                <Content/>
                            </div>
                        </div>
                        <div className="col-sm-2 col-lg-2">
                            <nav className="navbar navbar-default navbar-fixed-side">
                                <div className="row">
                                    <div className="col-sm-offset-4 col-sm-8">
                                        <p><b>Actions</b></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <RightNavBar/>
                                    </div>
                                </div>
                                <div className="row">
                                </div>

                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <footer>
                            <div className="footer-bottom">
                                <div className="container">
                                    <p className="pull-left"> Copyright © CMPE-273 2017. All right reserved.</p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        );

    }
}



const mapStateToProps = (state) => ({
    userName: state.UserDetailsReducer.userProfile.firstName+" "+state.UserDetailsReducer.userProfile.lastName,
    emailID : state.UserDetailsReducer.userProfile.email

})

function mapDispatchToProps(dispatch) {
    return {
        signOut : () => dispatch(Actions.signOut())
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Inbox));

