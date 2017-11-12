import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Home from './components/home';
import './App.css';
import Inbox from './containers/inbox'
import Profile from './components/Profile'


class App extends Component {

    render() {
        return (
            <div>

                <Route exact path="/" render={() => (
                    <Home/>
                )}/>

                <Route exact path="/inbox" render={() => (
                    <Inbox/>
                )}/>

                <Route exact path="/profile" render={() => (
                    <Profile/>
                )}/>
            </div>
        )

    }
}

export default withRouter(App);
