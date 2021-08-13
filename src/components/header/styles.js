import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    appBar: {
      background: '#272629 !important',
      boxShadow: 'none !important',
      paddingTop: theme.spacing(1),
      paddingLeft: 0,
      paddingBottom: theme.spacing(1),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default useStyles;