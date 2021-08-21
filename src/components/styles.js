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
        height: 'calc(100vh - 64px)',
        color: '#ffffff',
        '& p': {
            color: 'yellow'
        }
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    },
    link: {
        color: '#000000',
        textAlign: 'center',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    weatherDisplay: {
        margin: '100px 0',
        padding: '0px 15px'
    },
    select: {
        width: '100px',
        margin: '0 10px',
        background: 'yellow'
    },
    city: {
        padding: '15px 10px',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    home: {
        height: 'auto'
    },
    table: {
        padding: '15px'
    },
    appBar: {
        flexGrow: 1
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));