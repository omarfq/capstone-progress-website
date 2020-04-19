import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { CircularProgress } from '@material-ui/core';
import ButtonComponent from '../button/button.component';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    borderRadius: '30px',
    backgroundColor: '#414141',
    color: '#f4f4f4',
    justifyContent: 'space-around',
    marginTop: '.7rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  details: {
    textAlign: 'center',
    width: '25rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'rgba(50,49,48,0.6)',
    },
    color: 'rgba(50,49,48,0.6)',
  },
  cssFocused: {
    borderColor: '#f4f4f4',
    color: '#323130',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#0075DA !important',
      boxShadow: '0 0 10px #0075DA',
      color: '#f4f4f4 !important',
      borderWidth: '3px',
    },
  },
  notchedOutline: {
    borderColor: '#f4f4f4 !important',
    borderWidth: '3px',
  },
  checkFlagBtn: {
    '&:hover': {
      backgroundColor: '#16801F',
    },
    color: '#f4f4f4',
    backgroundColor: '#2D9A36',
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  const [flag, setFlag] = useState('');
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(flag);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(flag);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.details}>
          {props.description}
        </Typography>
      </CardContent>
      <form
        noValidate
        autoComplete="off"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              input: classes.input,
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          onChange={(e) => setFlag(e.target.value)}
          value={flag}
          id="outlined-search"
          label="Enter Flag"
          type="search"
          variant="filled"
        />
        {/* <Button type="submit" className={classes.checkFlagBtn}>
          Check Flag
        </Button> */}

        <ButtonComponent
          type="submit"
          onClick={load}
          loading={loading}
          className={classes.checkFlagBtn}
        />
      </form>
    </Card>
  );
}
