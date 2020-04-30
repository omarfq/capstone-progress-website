import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemDetails from '../item-details/item-details.component';
import LAB_DATA from '../data/lab.data';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '73%',
    margin: 'auto',
    marginTop: '5rem',
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
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(LAB_DATA);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.heading3}>Track Your Progress</h3>

      {data.map(({ id, ...otherLabProps }) => (
        <ExpansionPanel
          expanded={expanded === `panel${id}`}
          onChange={handleChange(`panel${id}`)}
          className={classes.item}
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
            />
            <ItemDetails
              title={otherLabProps.items[1].title}
              description={otherLabProps.items[1].description}
              flag={otherLabProps.items[1].flag}
            />
            <ItemDetails
              title={otherLabProps.items[2].title}
              description={otherLabProps.items[2].description}
              flag={otherLabProps.items[2].flag}
            />
            <ItemDetails
              title={otherLabProps.items[3].title}
              description={otherLabProps.items[3].description}
              flag={otherLabProps.items[3].flag}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
