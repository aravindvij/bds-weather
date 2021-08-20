import '../App.css';
import { TextField, Button, Link } from '@material-ui/core';
import { useStyles } from './styles';

export default function SignInForm() {

    const classes = useStyles();
    const sign_in_icon = "./signin-image.webp";

    return (
        <div className="App">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img alt="sign-in-logo" src={sign_in_icon}></img>
                <Link style={{ color: '#000000', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }}>Create an account</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <form className={classes.root}>
                    <TextField label="Your Name" required />
                    <TextField label="Password" type="password" required />
                </form>
                <div style={{ padding: '16px' }}>
                    {/* <Button variant="contained" color="primary" onClick={handleOpen}> */}
                    <Button variant="contained" color="primary" >
                        Login
  </Button>
                </div>
            </div>
        </div>
    );
}