
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore';
import './index.css';
import { createStore } from 'redux';
import loginconatiner from './Components/Containers/Login';
import Recordingslist from './Components/Containers/Recoderings';
import { hashHistory } from 'react-router';
import {Link, browserHistory, Router, Route  } from "react-router";
import CircularJSON from 'circular-json';

render(

  
    <Provider store={store}>
        <Router history={browserHistory}>
            <div>
            <Route path="/" component={loginconatiner}/>
            <Route path="/Recordings" component={Recordingslist}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

