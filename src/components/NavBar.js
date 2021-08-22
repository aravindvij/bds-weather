import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const classes = useStyles();
    const history = useHistory();

    const handleLogout = () => {
        if (localStorage.getItem("token", 'true')) {
            history.push("/signin");
            localStorage.clear();
        }
    }

    return (
        <div className={classes.appBar}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <Button color="inherit" href="/home">Home</Button>
                    <Button color="inherit" href="/weather">Weather</Button>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
