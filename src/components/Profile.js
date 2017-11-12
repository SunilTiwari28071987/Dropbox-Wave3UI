import React, { Component } from 'react';
import { connect } from 'react-redux'
import LeftNavBar from "../containers/leftNavBar";
import { withRouter } from 'react-router-dom';

class Profile extends Component {



    render() {

        const divStyle={
            margin: "20%"
        }


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
                                            <button type="button"
                                                    className="right form-control btn btn-primary"
                                                    name="logout"
                                                    id="logout"
                                                    value="logout"
                                                    onClick={() => this.props.history.push("/")}
                                            >
                                                Sign out
                                            </button>

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
                                <div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm-offset-3 col-sm-6 ">
                                                <div className="panel panel-primary" style={divStyle}>
                                                    <div className="panel-heading">User Profile</div>
                                                    <div className="panel-body">
                                                        <form className="form-horizontal">
                                                            <div className="form-group">
                                                                <label className="col-sm-4 col-md-4 col-lg-4">First Name :</label>
                                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                                    <p>{this.props.firstName}</p>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-4 col-md-4 col-lg-4">Last Name :</label>
                                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                                    <p>{this.props.lastName}</p>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-4 col-md-4 col-lg-4">Email :</label>
                                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                                    <p>{this.props.email}</p>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-4 col-md-4 col-lg-4">Age :</label>
                                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                                    <p>29</p>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-4 col-md-4 col-lg-4">Gender : </label>
                                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                                    <p>Male</p>
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
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
    firstName: state.UserDetailsReducer.userProfile.firstName,
    lastName: state.UserDetailsReducer.userProfile.lastName,
    email: state.UserDetailsReducer.userProfile.email
})


const ProfilePage =  connect(
    mapStateToProps,
    null
)(Profile)

export default withRouter(ProfilePage);



