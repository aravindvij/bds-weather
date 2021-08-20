import '../App.css';
import { TextField, Button, Link } from '@material-ui/core';
import { useStyles } from './styles';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img alt="sign-in-logo" src={sign_in_icon}></img>
                <Link href="/signup" style={{ color: '#000000', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }}>Create an account</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <form className={classes.root} onSubmit={handleSubmit}>
                    <TextField label="Your Name" required value={name}
                        onInput={e => setName(e.target.value)} />
                    <TextField label="Password" type="password" required value={password}
                        onInput={e => setPassword(e.target.value)} />
                    <Button variant="contained" color="primary" type="submit">
                        Login
                     </Button>
                </form>
            </div>
        </div>
    );
}