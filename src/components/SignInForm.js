import '../App.css';
import { TextField, Button, Link, InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

export default function SignInForm() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.get('https://sheet.best/api/sheets/f23eb6a7-6165-4e11-9be3-4dd2ef1a8f3b', {
            params: { name: name, password: password }
        })
            .then(response => {
                console.log(response);
                if (response.data.some(user => user.name === name && user.password === password)) {
                    localStorage.setItem("token", 'true');
                    console.log('success');
                    history.push("/home");
                } else {
                    console.log('failed');
                }

            })
    }

    const classes = useStyles();
    const sign_in_icon = "./signin-image.webp";

    return (
        <div className="App">
            <div className={classes.flex}>
                <img alt="sign-in-logo" src={sign_in_icon}></img>
                <Link href="/signup" className={classes.link}>Create an account</Link>
            </div>
            <div className={classes.flex}>
                <form className={classes.root} onSubmit={handleSubmit}>
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
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }} label="Password" type="password" required value={password}
                        onInput={e => setPassword(e.target.value)} />
                    <Button variant="contained" color="primary" type="submit">
                        Login
                     </Button>
                </form>
            </div>
        </div>
    );
}