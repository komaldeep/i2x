import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetRecording } from './../../Action/Index';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import Recordinglists from '../Widgits/WidgitRecordingList/WidgitRecordinglists';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Recoderings extends Component {


    componentWillMount(){

        if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined){
            browserHistory.push('/');
        }
    }

    componentDidMount(){
        let token = localStorage.getItem("token");
        this.props.GetRecording(token);
    }

    logout(){
        localStorage.removeItem("token");
        browserHistory.push('/');
    }

    render() {
        const {Recordinglist} = this.props.Reducers;
        let lists, Recordingarray;
        Recordingarray = [];

        if(Recordinglist == false){
            lists =  ""
        }
        else {
            for (let i in Recordinglist.list.results) {
                Recordingarray.push(Recordinglist.list.results[i]);
            }

            lists = Recordingarray.map((details, i) =>{
                return (
                <Recordinglists
                    key={i}
                    detail={details}
                    />
                )
            })

        }
        return (
              <MuiThemeProvider>
            <div className="container">
                <AppBar
                    title="i2x-App"
                    iconElementRight={<FlatButton onClick={this.logout.bind(this)} label="Log out" />}
                />

                {lists}

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
        GetRecording
    }, dispatch);
}


const Recordingslist = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recoderings)

export default Recordingslist;
