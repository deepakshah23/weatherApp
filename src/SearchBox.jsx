
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    
    let [city, setCity]=useState("");
    let [error, setError]=useState(false);

   
    const API_URL= process.env.API_URLS;
    const APIKEY = process.env.API_KEYS;


    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSumit=async (evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

   return(
        <div className="searchBox">
        <form onSubmit={handleSumit}>
        <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
        <br /> <br />

        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
        <br />
        </div>

    );
};