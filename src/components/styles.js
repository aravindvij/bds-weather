import { makeStyles } from '@material-ui/core/styles';
let backgroundImg = "./weather_bg.png";

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
    weather: {
        backgroundImage: `url(${backgroundImg})`,
        width: '100vw',
        height: '100vh',
        color: '#ffffff',
        display: 'flex',
        '& div': {
            alignSelf: 'center'
        },
        '& p': {
            color: 'yellow'
        }
    },
    home: {
        height: 'auto',
        margin: '10px',
        padding: '10px'
    }
}));