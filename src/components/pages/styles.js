import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('600')]: {
            justifyContent: "space-between"
        },

        '& > *': {
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        width: "10em",
        height: "10em",
        
        [theme.breakpoints.down('600')]: {
            width: "45%",
            '& > *:nth-child(2n)': {
                marginRight: 0
            }
        },
        [theme.breakpoints.down('350')]: {
            width: "100%",
            marginRight: 0
        }
    },
    
    },
}));

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export {useStyles, getStyles, MenuProps};