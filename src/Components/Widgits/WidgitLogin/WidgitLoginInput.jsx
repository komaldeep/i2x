import React, { Component } from 'react';
import './Login.css';
import CircularProgress from 'material-ui/CircularProgress';
import { browserHistory } from 'react-router';

class WidgitLoginInput extends Component {

    constructor(props){
        super(props);
        this.state= {
            Username:'',
            Password:'',
            Validation:'',
            ShowValidation:false,
        };
    }


    Passwordvalue(){
        this.setState({
            Password: this.password.value
        })
    }

    Useremail(){
        this.setState({
            Username: this.Username.value
        })

        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(reg.test(this.Username.value) == false){
            this.setState({
                Validation: "Please write proper email validation",
                ShowValidation:true,
            })
        }
        else {
            this.setState({
                Validation: "",
                ShowValidation:false,
            })
        }

    }

    submitbutton(){
        if(this.state.Username != '' || this.state.Password != '') {
            this.props.submitDetails(this.state.Username, this.state.Password)
        }
        else {
            this.setState({
                Validation: "Please fill Username OR password",
                ShowValidation:true,
            })
        }
    }

    componentWillReceiveProps(newProps){

        if(newProps.loginCredentials != false){

           // console.log(newProps.loginCredentials.Authkey.token,'newProps.loginCredentials.Authkey.token');

            if(newProps.loginCredentials.Authkey.token == undefined){
                this.setState({
                    Validation: "Username Or Password is wrong",
                    ShowValidation:true,
                })
            }
            else {
                localStorage.setItem('token',newProps.loginCredentials.Authkey.token );
                // this.props.pushtoRecording();
                browserHistory.push('/Recordings');
            }
        }

    }

    render() {

        let ShowLoader = false;

        if(this.props.loader.loadingaction != undefined){
            if(this.props.loader.loadingaction == true){
                ShowLoader = true;
            }
        }

        return (
            <div className="LOginPanel">

                <input className="inputfield"
                       placeholder="Enter Username"
                       name="Username"
                       ref={(a) => this.Username = a}
                       onChange={this.Useremail.bind(this)}
                />

                <input className="inputfield"
                       type="password"
                       placeholder="Enter Password"
                       name="password"
                       ref={(b) => this.password = b}
                       onChange={this.Passwordvalue.bind(this)}
                />

                {this.state.ShowValidation ?
                    <div className="warning">
                        {this.state.Validation}
                    </div>
                    :
                    <div></div>
                }

                <button className="SubmitButton" onClick={this.submitbutton.bind(this)}>
                    {
                        ShowLoader ?
                        <CircularProgress size={20} thickness={5} color="#fff"/>
                        :
                        <div></div>
                    }
                    Submit
                </button>

            </div>
        );
    }
}

export default WidgitLoginInput;
