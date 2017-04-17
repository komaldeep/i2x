import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginAttempt } from './../../Action/Index';
import AppBar from 'material-ui/AppBar';
import WidgitLoginInput from '../Widgits/WidgitLogin/WidgitLoginInput';
import { withRouter } from 'react-router';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PropTypes } from 'react';



class Login extends Component {

    componentWillMount(){
        if(localStorage.getItem("token") != null || localStorage.getItem("token") != undefined){
            browserHistory.push('/Recordings');
        }
    }

    submitDetails(Username, Passwort){
        this.props.LoginAttempt(Username, Passwort);
    }


    render() {
        const {loader , login} = this.props.Reducers;

        return (
              <MuiThemeProvider>
            <div className="container">
                <AppBar
                    title="i2x-App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />

               <WidgitLoginInput
                   submitDetails={this.submitDetails.bind(this)}
                   loader={loader}
                   loginCredentials={login}
               />

            </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(store) {
    return { Reducers: store.Reducers};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        LoginAttempt
    }, dispatch);
}


const loginconatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default loginconatiner;
