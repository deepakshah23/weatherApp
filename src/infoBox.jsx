import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    
    
    const HOT_URL="https://images.unsplash.com/photo-1572246538688-3f326dca3951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyfGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1526991902737-3cd476541629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ? <ThunderstormIcon/>:info.temp>15 ? <WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temerature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The Weather can be described as <b>{info.weather}</b> feels like <b>{info.feelslike}&deg;C</b> </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}