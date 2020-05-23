import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemDetails from '../item-details/item-details.component';
import LAB_DATA from '../data/lab.data';
import FinishButtonComponent from '../button/finishButton.component';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '73%',
    margin: 'auto',
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  item: {
    marginBottom: '1.7rem',
    borderRadius: '5px',
    backgroundColor: '#323130',
    color: '#f4f4f4',
  },
  itemCompleted: {
    marginBottom: '1.7rem',
    borderRadius: '5px',
    backgroundColor: '#2D9A36',
    color: '#f4f4f4',
  },
  itemCompleted1: {
    marginBottom: '1.7rem',
    borderRadius: '5px',
    backgroundColor: '#2D9A36',
    color: '#f4f4f4',
  },
  expandArrow: {
    color: '#f4f4f4',
    backgroundColor: '#0075DA',
    borderRadius: '50%',
  },
  heading3: {
    textAlign: 'center',
    marginTop: '-1.8rem',
    marginBottom: '2.5rem',
    color: '#f4f4f4',
    fontSize: '1.5rem',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailsContainerCompleted: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  finishText: {
    textAlign: 'center',
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [completed, setCompleted] = useState('');
  const [count, setCount] = useState(0);
  const [data, setData] = useState(LAB_DATA);
  const [childData, setChildData] = useState(Boolean);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const childVerificationArray = [0, 1, 2, 3];
  const childDataArray = [];

  const load = (data, id) => {
    if (data) {
      if (childDataArray.length < 4) {
        childDataArray.push(id);
        childDataArray.sort();
      } else {
        childDataArray.sort();
      }
    }
    if (
      JSON.stringify(childDataArray) === JSON.stringify(childVerificationArray)
    ) {
      setCount(count + 1);
      setChildData(true);
    } else {
      setChildData(false);
    }
  };

  const loadButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (count === 1) {
        setCompleted('true');
      } else {
        setCompleted('false');
      }
    }, 2000);
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.heading3}>Track Your Progress</h3>
      <h6 className={classes.text}>
        The flag-checking system is case-sensitive, please enter the flags
        exactly as they are given by the exercises.
      </h6>
      <p className={classes.text}>Good luck!</p>

      {data.map(({ id, ...otherLabProps }) => (
        <ExpansionPanel
          expanded={expanded === `panel${id}`}
          onChange={handleChange(`panel${id}`)}
          className={
            completed === 'true' ? classes.itemCompleted : classes.item
          }
          key={id}
          {...otherLabProps}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.expandArrow} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
               {otherLabProps.moduleName}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.detailsContainer}>
            <ItemDetails
              title={otherLabProps.items[0].title}
              description={otherLabProps.items[0].description}
              flag={otherLabProps.items[0].flag}
              parentLoad={load}
              id={0}
            />
            <ItemDetails
              title={otherLabProps.items[1].title}
              description={otherLabProps.items[1].description}
              flag={otherLabProps.items[1].flag}
              parentLoad={load}
              id={1}
            />
            <ItemDetails
              title={otherLabProps.items[2].title}
              description={otherLabProps.items[2].description}
              flag={otherLabProps.items[2].flag}
              parentLoad={load}
              id={2}
            />
            <ItemDetails
              title={otherLabProps.items[3].title}
              description={otherLabProps.items[3].description}
              flag={otherLabProps.items[3].flag}
              parentLoad={load}
              id={3}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
      <FinishButtonComponent
        onClick={loadButton}
        loading={loading}
        className={classes.checkFlagBtn}
      />
      <h2 className={classes.finishText}>
        {completed === 'true'
          ? 'Congratulations on finishing the lab! Great work!'
          : completed === 'false'
          ? 'You still have some exercises left!'
          : ''}
      </h2>
    </div>
  );
}
