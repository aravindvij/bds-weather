import '../App.css';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Weather() {

    const [weather, setWeather] = useState([]);

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
        <div className={classes.weather}>
            {weather &&
                <div>
                    <p>March 12</p>
                    {weather.init}
                </div>
            }
            {weather.dataseries && weather.dataseries.map(elem => {
                <div>
                    {elem.cloudcover}
                </div>
            })}
        </div >
    );
}