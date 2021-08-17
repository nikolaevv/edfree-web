import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1em',
      marginBottom: '1em'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '70%',
      },
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: "12em",

      [theme.breakpoints.down('sm')]: {
        width: "10em"
      },
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    pos: {
      marginBottom: 12,
    },
}));

export default useStyles;