import React,{ Component } from 'react';
import "./style.scss";

import { Manager, Reference, Popper } from 'react-popper';

import Weather from "./weather";

class TopComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            isSlectlocationOpen: false
        }
    }
locationHandler = (e)=>{
    this.setState(prevState => ({
        isSlectlocationOpen: !prevState.isSlectlocationOpen
      }))
}

changeLocationHandler = (e) =>{
    this.setState({location: e.target.value})
}
selectCity = ()=>{
    const {location} = this.state;
    const {eventEmitter} = this.props;
    this.setState({isSlectlocationOpen:false})

    eventEmitter.emit("updateWeather",location)
}
render(){
    const {isSlectlocationOpen} = this.state;
    const {eventEmitter} = this.props;
    return<div className="top-container">
    <div className="title">Weather Update</div>
    <Weather {...this.props}    />
    <Manager>
    <Reference>
      {({ ref }) => (
        <button className="btn btn-selection-location" ref={ref} onClick={this.locationHandler}>Change Location</button>
      )}
    </Reference>
    <Popper placement="top">
      {({ ref, style, placement, arrowProps }) => (
        isSlectlocationOpen &&
        <div className="popup-container" ref={ref} style={style} data-placement={placement}>
         <div className="form-container">
         <label htmlFor="location-name">Location Name</label>
         <input id="location-name" type="text" placeholder="City Name" onChange={this.changeLocationHandler}></input>
         <button className="btn btn-select-location" onClick={this.selectCity} >Select</button>
         </div>
          <div ref={arrowProps.ref} style={arrowProps.style} />
        </div>
      )}
    </Popper>
  </Manager>
    </div>
}
}


export default TopComponent;