import React, {Component} from 'react';
import SignUp from './signup';
import SignIn from './signin';
import './home.css';
//import ModalBox from '../components/modal'


class Home extends Component {

    constructor() {
        super();

        this.state = {
            display: "SignUp",
            modalState: false
        }

    }


    renderSignUp() {
        return <SignUp/>
    }


    renderSignIn() {
        return <SignIn/>
    }

    /*renderModal() {
        return <ModalBox modalState={this.state.modalState}/>
    }*/

    render() {

        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-side ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2">
                                <img src={"images/dropbox_logo.png"}/>
                            </div>
                            <div className="col-sm-8">
                                <img src={"images/dropbox_text.png"}/>
                                <p>Dropbox is a modern workspace designed to reduce busywork—so you can focus on the
                                    things that matter.</p>
                            </div>

                            <div className="col-sm-1">
                                <button type="button" className="form-control btn btn-primary" name="buttonSignUp"
                                        id="buttonSignUp" value="Sign Up" onClick={() => {
                                    this.setState({display: "SignUp"})
                                }}>Sign Up
                                </button>
                            </div>
                            <div className="col-sm-1">
                                <button type="button" className="form-control btn btn-primary" name="buttonSignIn"
                                        id="buttonSignIn" value="Sign In" onClick={() => {
                                    this.setState({display: "SignIn"})
                                }}>Sign In
                                </button>

                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-offset-2 col-sm-4">
                            <img src={"images/dropbox_signIn_signup_logo.png"}/>
                        </div>
                        <div className="col-sm-5">
                            {this.state.display === 'SignUp' ? this.renderSignUp() : this.renderSignIn()}
                            {/*this.state.modalState ? this.renderModal() : console.log("no")*/}
                        </div>
                    </div>
                </div>
                <div>
                    <footer>
                        <div className="footer" id="footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                        <h3> Dropbox </h3>
                                        <ul>
                                            <li><a href="#"> Desktop app </a></li>
                                            <li><a href="#"> Mobile apps </a></li>
                                            <li><a href="#"> Plans </a></li>
                                            <li><a href="#"> Security </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                        <h3> Products </h3>
                                        <ul>
                                            <li><a href="#"> Plus </a></li>
                                            <li><a href="#"> Business </a></li>
                                            <li><a href="#"> Enterprise </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                        <h3> Company </h3>
                                        <ul>
                                            <li><a href="#"> About us </a></li>
                                            <li><a href="#"> Jobs </a></li>
                                            <li><a href="#"> Press </a></li>
                                            <li><a href="#"> Blog </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                        <h3> Support </h3>
                                        <ul>
                                            <li><a href="#"> Help center </a></li>
                                            <li><a href="#"> Contact us </a></li>
                                            <li><a href="#"> Cookies </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                        <h3> Community </h3>
                                        <ul>
                                            <li><a href="#"> Developers </a></li>
                                            <li><a href="#"> Referrals </a></li>
                                            <li><a href="#"> Forum </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="footer-bottom">
                            <div className="container">
                                <p className="pull-left"> Copyright © CMPE-273 2017. All right reserved. </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>



        );
    }
}

export default Home;
