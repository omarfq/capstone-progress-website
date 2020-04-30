import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  checkFlagBtn: {
    '&:hover': {
      backgroundColor: '#16801F',
    },
    '&:disabled': {
      backgroundColor: '#2D9A36',
    },
    color: '#f4f4f4',
    backgroundColor: '#2D9A36',
    marginTop: '.6rem',
  },
  spinner: {
    color: '#fff',
  },
}));

function ButtonComponent(props) {
  const classes = useStyles();

  const { onClick, loading } = props;
  return (
    <Button
      className={classes.checkFlagBtn}
      variant="contained"
      onClick={onClick}
      disabled={loading}
    >
      {loading && <CircularProgress size={24} className={classes.spinner} />}

      {!loading && 'Check Flag'}
    </Button>
  );
}

export default ButtonComponent;
