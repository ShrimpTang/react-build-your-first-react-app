/**
 * Created by Shrimp on 16/4/5.
 */
import React from 'react'
import ReactDOM  from 'react-dom';
import MyRouter from './config/router'
import {Link} from 'react-router';
ReactDOM.render(
    <div>
        <Link  to="/profile" >afd</Link>
        <MyRouter/>
    </div>
    ,
    document.getElementById('app')
)