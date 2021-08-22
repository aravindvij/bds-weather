import '../App.css';
import { TextField, Button, Link, InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';
import { useState } from 'react';
import axios from 'axios';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function SignUpForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = { name, email, password, repeatPassword };
        console.log(requestBody);

        axios.post('https://sheet.best/api/sheets/f23eb6a7-6165-4e11-9be3-4dd2ef1a8f3b', requestBody)
            .then(response => {
                console.log(response.data);
            })
    }

    const classes = useStyles();

    // const sign_up_icon = require("../assets/images/signup-image.webp");
    const sign_up_icon = "./signup-image.webp";

    return (
        <div className="App">
            <div className={classes.flex}>
                <form className={classes.root} onSubmit={handleSubmit} >
                    <TextField InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} label="Your Name" required value={name}
                        onInput={e => setName(e.target.value)} />
                    <TextField InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailIcon />
                            </InputAdornment>
                        ),
                    }} label="Your Email" type="email" required value={email}
                        onInput={e => setEmail(e.target.value)} />
                    <TextField InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }} label="Password" type="password" required value={password}
                        onInput={e => setPassword(e.target.value)} />
                    <TextField InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon />
                            </InputAdornment>
                        ),
                    }} label="Repeat your password" type="password" required value={repeatPassword}
                        onInput={e => setRepeatPassword(e.target.value)} />
                    <Button variant="contained" color="primary" type="submit">
                        Register
                    </Button>
                </form>
            </div>
            <div className={classes.flex}>
                <img alt="sign-up-logo" src={sign_up_icon}></img>
                <Link href="/signin" className={classes.link}>I am already a member</Link>
            </div>
        </div>
    );
}