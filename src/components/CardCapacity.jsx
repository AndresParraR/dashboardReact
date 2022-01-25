import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, IconButton, Tooltip } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PaletteIcon from '@material-ui/icons/Palette';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GraphCircle from './GraphCircle';

import elephantImage from "../assets/images/elephant.jpg";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, firstName: 'Snow',},
  { id: 2, firstName: 'Lannister',},
  { id: 3, firstName: 'Lannister',},
];

const CardCapacity = () => {

  const [translateY, setTranslateY] = useState(0)

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 350,
      overflow: 'visible',
    },
    graphCircle: {
      
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
      height: 230,
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
      padding: 30,
      color: '#fff',
      fontSize: 17,
      backgroundColor: '#00CFE6',
      borderRadius: '.25rem',
      top: -30,
      zIndex: 1,
      position: 'relative',
      transform: `translateY(${translateY}px)`,
      transition: 'all .3s cubic-bezier(.34,1.61,.7,1)'
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
        <GraphCircle className={classes.graphCircle} info={20}/>
        Visitors
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
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        disableColumnMenu
        disableSelectionOnClick
      />
    </CardContent>
    <CardActions className={classes.cardActions} disableSpacing>
      <AccessTimeIcon className="icon-small"/>
      <p className={classes.textUpdated}>Updated 10 minutes ago</p>
    </CardActions>
  </Card>
  )
}

export default CardCapacity