/**
 * Created by Shrimp on 16/4/5.
 */
import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'
import { Router, Route, IndexRoute,browserHistory,hashHistory } from 'react-router'
export default class MyRouter extends React.Component {

    render() {
        return (
            <Router history={hashHistory }>
                <Route path="/" component={Main}>
                    <Route name="profile" path="/profile" component={Profile}/>
                    <IndexRoute component={Home}/>
                </Route>
            </Router>
        )
    }

}
MyRouter.contextTypes = {
    router: function () {
        return React.PropTypes.func.isRequired;
    }
};