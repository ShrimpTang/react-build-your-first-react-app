/**
 * Created by Shrimp on 16/4/5.
 */
import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import { Router, Route, IndexRoute,browserHistory} from 'react-router'
export default class MyRouter extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}/>
            </Route>
            </Router>
       )
    }

}