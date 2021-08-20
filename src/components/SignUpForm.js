import '../App.css';
import { TextField, Button, Link } from '@material-ui/core';
import { useStyles } from './styles';

export default function SignUpForm() {

    const classes = useStyles();

    // const sign_up_icon = require("../assets/images/signup-image.webp");
    const sign_up_icon = "./signup-image.webp";

    return (
        <div className="App">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <form className={classes.root}>
                    <TextField label="Your Name" required />
                    <TextField label="Your Email" type="email" required />
                    <TextField label="Password" type="password" required />
                    <TextField label="Repeat your password" type="password" required />
                </form>
                <div style={{ padding: '16px' }}>
                    {/* <Button variant="contained" style={{ margin: '0 5px' }}>
                        Cancel
  </Button> */}
                    {/* <Button variant="contained" color="primary" onClick={handleOpen}> */}
                    <Button variant="contained" color="primary" >
                        Register
  </Button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img alt="sign-up-logo" src={sign_up_icon}></img>
                <Link href="/signin" style={{ color: '#000000', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }}>I am already a member</Link>
            </div>
        </div>
    );
}