import React, {Component} from 'react'
import {browserHistory} from 'react-router'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import FileItemList from '../components/fileItemList'
import * as  FileActions from '../actions/fileActions'
import * as  UserActions from '../actions/userActions'
import {store} from '../index'
import TextBox from "../components/textBox";

const invisibleStyle = {display: "none"}

class LeftNavBar extends Component {


    render() {
        return (
            <div>
                <div>

                    <button type="button"
                            className="form-control btn btn-primary"
                            name="Profile"
                            id="Profile"
                            value="Profile"
                            onClick={() => this.props.history.push("/profile")}>
                        User Profile
                    </button>

                    <div className="col-sm-5">
                        <br/>
                    </div>
                    <button type="button"
                            className="form-control btn btn-primary"
                            name="home"
                            id="home"
                            value="home"
                            onClick={() => this.props.history.push("/inbox")}>
                        Home
                    </button>
                    <div className="col-sm-5">
                        <br/>
                    </div>

                </div>
            </div>

        )
    }


}


export default withRouter(LeftNavBar)
