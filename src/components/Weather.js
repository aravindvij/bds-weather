import '../App.css';
import { Button, Select, InputLabel, FormControl, MenuItem } from '@material-ui/core';
import { useStyles } from './styles';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './NavBar';

export default function Weather() {

    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const classes = useStyles();

    const dateObj = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getUTCDate();

    const sign_up_icon = "./signup-image.webp";

    useEffect(() => {
        const getWeather = async () => {
            try {
                // const res = await axios.get(
                //     `https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`,
                // );
                const res = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/alerts', {
                    params: { lat: 38.5, lon: -77.5 }, headers: {
                        'x-rapidapi-key': '33e171f288msh7aab9be8834de80p1cd701jsn35dccdd81c80',
                        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
                    }
                });
                setWeather(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        getWeather();
    }, []);
    console.log(weather);

    return (
        <>
            <Navbar></Navbar>
            <div className={classes.weather}>
                <div className={classes.city}>
                    <select className={classes.select} onChange={handleChange} value={city}>
                        <option value="" disabled selected>Select</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Khariv">Khariv</option>
                        <option value="Tokyo">Tokyo</option>
                    </select>
                </div>
                {weather &&
                    <div className={classes.weatherDisplay}>
                        <p>{month} {day}</p>
                        <p>{city}</p>
                        <p>City : {weather.city_name}</p>
                        <p>Country :{weather.country_code}</p>
                        <p>lat: {weather.lat}</p>
                        <p>lon: {weather.lon}</p>
                        <p>state: {weather.state_code}</p>
                        <p>timezone: {weather.timezone}</p>
                        {/* {weather.init} */}
                    </div>
                }
                {weather.dataseries && weather.dataseries.map(elem => {
                    <div>
                        {elem.cloudcover}
                    </div>
                })}
            </div >
        </>
    );
}