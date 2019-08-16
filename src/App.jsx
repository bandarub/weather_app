import React,{Component} from 'react';
import './App.css';
import "./sass/app.scss";
import axios from 'axios';
import TopComponent from "./components/top/index";
import BottomComponent from "./components/bottom/index";

const API_KEY = "45951764673e4e73a9461615191608";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city:"Espoo",
      forcastDays:10,
      isDegrees : true,
      isLoading: true
    }
  }
 updateWeather = () =>{
  const {city,forcastDays} = this.state;
  const URL = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}  &q=${city} &days=${forcastDays}`;
  axios.get(URL)
  .then(res=>{
    return res.data;
  })
  .then(data=>{
    this.setState({
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      isDay:data.current.is_day,
      text:data.current.condition.text,
      iconURL: data.current.condition.icon,
      location:data.location.name,
      isLoading:false
    })
  })
  .catch(err=>{
    if(err){
      console.log("Cannot fetch weather data from API",err)
    }
  });  

 }
  componentDidMount(){
    const {eventEmitter} = this.props;
    this.updateWeather()
    eventEmitter.on("updateWeather",data=>{
      this.setState({city:data},()=>this.updateWeather())
    })

   
  }

  changeUnitHandler = (e) =>{
      this.setState(prevState => ({
          isDegrees: !prevState.isDegrees
        }));
  }

  render(){
    const {isLoading,isDegrees,temp_c,temp_f,isDay,iconURL,text,city} = this.state;
    return <div className="app-container">
    {isLoading? <h2>Weather Data is Loading.......</h2>:
    <div className="main-container">
      <div className="top-section"><TopComponent isDegrees={isDegrees} location={city} eventEmitter={this.props.eventEmitter} text={text} iconURL={iconURL} temp_c={temp_c} temp_f={temp_f} isDay={isDay}/></div>
      <div className="bottom-section"><BottomComponent isDegrees={isDegrees} /> </div>
      <button className="btn btn-change-units" onClick={this.changeUnitHandler}>Change to {isDegrees?"º F":"º C"}</button>
    </div>}    
    </div>
  }
  
}

export default App;
