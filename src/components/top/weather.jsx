import React,{Component} from 'react';

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }


render(){
    const {temp_c,temp_f,isDay,iconURL,text,isDegrees,location} = this.props;
    return<div className="weather-container">
    <div className="header">{location}</div>
    <div className="inner-container">
        <div className="image"><img src={iconURL}></img></div>
        <div className="current-weather">{isDegrees ? `${temp_c} ºC` : `${temp_f} ºF`}</div>
    </div>
        <div className="footer">{text}</div>
    </div>
}
}


export default Weather;