import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
var secToMin = require('sec-to-min');
import './list.css';


class Recordinglists extends Component {

    constructor(props){
        super(props);
        this.state= {

        };
    }

    showstars(stars){

        let totalrating, totalstars;
        totalrating = [];
        for(let i = 0 ;i < stars; i++ ){
            totalrating.push(i);
        }

        totalrating = totalrating.map((detail , i) =>{
            return(
            <img key={i} className="rating" src={require('./../../../Images/star.png')} />
            )
        })

        return totalrating;

    }

    render() {
        const {final_script, created, rating, duration, url, language} = this.props.detail;
        let ratings, parsedate, dateinseconds, actualdate, minutes ;

        // showing rating stars by calling this functions
        ratings = this.showstars(rating);

        // date in human readble form
        parsedate = Date.parse(created)
        dateinseconds = new Date(parsedate);
        actualdate = dateinseconds.toDateString();

        //timeperiod
        minutes = secToMin(duration);

        return (
           <div className="listcontainer">

               <Card>
                   <div className="cardtop">
                       <div>
                         {ratings}
                       </div>

                       <div className="content">
                         {actualdate}
                       </div>

                       <div className="content">
                           <a href={url} target="_blank"> Audio  </a> {minutes}
                       </div>
                   </div>

                   <CardText>
                       <b>{language}</b> <br/>
                       {final_script}
                   </CardText>

               </Card>
            </div>
        );
    }
}

export default Recordinglists ;
