import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  checkFlagBtn: {
    '&:hover': {
      backgroundColor: '#03B0FF',
    },
    '&:disabled': {
      backgroundColor: '#0075DA',
    },
    color: '#f4f4f4',
    backgroundColor: '#0075DA',
    marginTop: '.6rem',
  },
  spinner: {
    color: '#fff',
  },
}));

function FinishButtonComponent(props) {
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

      {!loading && 'Click here if you finished all exercises'}
    </Button>
  );
}

export default FinishButtonComponent;
