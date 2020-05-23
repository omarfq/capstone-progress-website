import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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
    justifyContent: 'center',
    margin: '1rem 0',
  },
  inputCorrect: {
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0px 0px 15px 5px #2D9A36',
  },
  inputIncorrect: {
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0px 0px 15px 5px red',
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
  checkText: {
    textAlign: 'center',
    marginTop: '.2rem',
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  const [flag, setFlag] = useState('');
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState('');

  let complete = Boolean;
  let id = props.id;

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (
        props.flag[0] === flag ||
        props.flag[1] === flag ||
        props.flag[2] === flag ||
        props.flag[3] === flag ||
        props.flag[4] === flag ||
        props.flag[5] === flag ||
        flag.length === 26
      ) {
        setCheck('true');
        complete = true;
        props.parentLoad(complete, id);
      } else {
        setCheck('false');
        complete = false;
        props.parentLoad(complete, id);
      }
    }, 2000);
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
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              input:
                check === ''
                  ? classes.input
                  : check === 'true'
                  ? classes.inputCorrect
                  : classes.inputIncorrect,
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
        <ButtonComponent
          type="submit"
          onClick={load}
          loading={loading}
          className={classes.checkFlagBtn}
        />
        <div className={classes.checkText}>
          {check === '' ? '' : check === 'true' ? 'Correct!' : 'Try again!'}
        </div>
      </form>
    </Card>
  );
}
