import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, IconButton, Tooltip, Divider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import PaletteIcon from '@material-ui/icons/Palette';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import ChartistGraph from 'react-chartist';

class Bar extends React.Component {
  render() {

    var data = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', ''],
      series: [
        [1, 2, 4, 8, 6, 10, 7]
      ]
    };

    var type = 'Bar'

    return (
      <ChartistGraph className="chart-white" data={data}  type={type} />
    )
  }
}

const CardGraphStatistics = () => {

  const [translateY, setTranslateY] = useState(0)

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      overflow: 'visible',
      marginTop: '5rem'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    containCardHeader:{
      padding: '0 20px',
    },
    containActions:{
      display: 'flex',
      justifyContent: 'center',
      marginTop: -70,
      marginBottom: 10,
    },
    cardContent:{
      paddingTop: 0,
    },
    cardActions:{
      padding: '0 20px',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.8rem'
    },
    textUpdated: {
      marginLeft: 5
    },
    containGraphCircle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 15,
      paddingTop: 25,
      color: '#fff',
      fontSize: 17,
      backgroundColor: '#00CFE6',
      borderRadius: '.25rem',
      top: -30,
      zIndex: 1,
      position: 'relative',
      transform: `translateY(${translateY}px)`,
      transition: 'all .3s cubic-bezier(.34,1.61,.7,1)'
    },
    tetxIcon:{
      display: 'flex',
      alignItems: 'end',
      marginRight: 8,
      color: 'rgb(76, 175, 80)',
      fontSize: 15
    }
  }));

  const classes = useStyles();

  return (
  <Card className={classes.root}>
    <div 
      onMouseEnter={() => setTranslateY(-45)}
      onMouseLeave={() => setTranslateY(0)}
      className={classes.containCardHeader}>
      <div className={classes.containGraphCircle}>
        <Bar />
      </div>
      <div className={classes.containActions}>
        <Tooltip title="Palette">
          <IconButton aria-label="palette">
            <PaletteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
    <CardContent className={classes.cardContent}>
      <h3>Laboratories Headquearters</h3>
      <p className="d-flex"><span className={classes.tetxIcon}><ArrowUpwardIcon className="icon-small"/> 52%</span> Increase in visitors in recent days</p>
    </CardContent> 
    <CardActions className={classes.cardActions} disableSpacing>
      
      <AccessTimeIcon className="icon-small"/>
      <p className={classes.textUpdated}>Updated 10 minutes ago</p>
    </CardActions>
  </Card>
  )
}

export default CardGraphStatistics;