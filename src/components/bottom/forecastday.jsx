import React,{Component} from 'react';
import moment from 'moment';

import './styles.scss';

class Forecast extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    formatDate = (date) =>{
        var dateTime = new Date(date);
        dateTime = moment(dateTime).format("DD/MM");
        return dateTime;
    }
render(){
    const {day,isDegrees} = this.props;
    const formattedDate = this.formatDate(day.date)
    return<div className="forecastday-container">
        <div className="date">{formattedDate}</div>
        <div className="image"><img src={day.day.condition.icon}></img></div>
        <div className="text">{day.day.condition.text}</div>
        <div className="max-temperature">max {isDegrees ? `${day.day.maxtemp_c} ºC ` :`${day.day.maxtemp_f} ºF ` }</div>
        <div className="min-temperature">min {isDegrees ? `${day.day.mintemp_c} ºC ` :`${day.day.mintemp_f} ºF ` }</div>
        

    </div>
}
}


export default Forecast;