import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from './infoBox'

export default function Weather(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelslike:40.8,
        temp:42.05,
        tempMin:42.05,
        tempMax:42.05,
        humidity:16,
        weather:"haze",   
       
    });
    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}