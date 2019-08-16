import React,{Component} from 'react';

import Forecast from './forecastday';

import './styles.scss';

class BottomComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
render(){
    const {forecastDays,isDegrees} = this.props;
    return<div className="bottom-container">
        <div className="inner-container">
            {forecastDays && forecastDays.map((day,id)=> <Forecast key={id} day={day} isDegrees={isDegrees}/>)}
        </div>
    </div>
}
}


export default BottomComponent;