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

    const sign_up_icon = "./signup-image.webp";

    // axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/alerts', {
    //     params: { lat: 38.5, lon: -77.5 }, headers: {
    //         'x-rapidapi-key': '33e171f288msh7aab9be8834de80p1cd701jsn35dccdd81c80',
    //         'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    //     }
    useEffect(() => {
        const getWeather = async () => {
            try {
                const res = await axios.get(
                    `https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`,
                );
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
                    <label>Select City</label>
                    <select style={{ width: '100px', margin: '0 10px' }} onChange={handleChange} value={city}>
                        <option value="Delhi">Delhi</option>
                        <option value="Khariv">Khariv</option>
                        <option value="Tokyo">Tokyo</option>
                    </select>
                </div>
                {weather &&
                    <div className={classes.weatherDisplay}>
                        <p>March 12</p>
                        <p>{city}</p>
                        {weather.init}
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