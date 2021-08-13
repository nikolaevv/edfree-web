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
      '& > *': {
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        width: theme.spacing(20),
        height: theme.spacing(20),
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