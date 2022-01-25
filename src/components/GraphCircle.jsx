import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const GraphCircle = (props) => {
  const useStyles = makeStyles((theme) => ({
    containProgressCircular: {
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 160,
      width: 160,
      marginBottom: '1em',
      color: '#fff'
    },
    svgCircular: {
      transform: 'rotate(270deg)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 0
    },
    circleUnderlay:{
      stroke: 'rgba(158, 158, 158, 0.4)',
      zIndex: 1
    },
    circleOverlay:{
      stroke: 'currentColor',
      zIndex: 2,
      transition: 'all 0.6s ease-in-out'
    },
    progressCircleInfo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.containProgressCircular}>
      <svg className={classes.svgCircular} xmlns="http://www.w3.org/2000/svg" viewBox="22.054794520547944 22.054794520547944 44.10958904109589 44.10958904109589">
        <circle className={classes.circleUnderlay} fill="transparent" cx="44.10958904109589" cy="44.10958904109589" r="20" strokeWidth="4.10958904109589" strokeDasharray="125.664" strokeDashoffset="0"></circle>
        <circle className={classes.circleOverlay} fill="transparent" cx="44.10958904109589" cy="44.10958904109589" r="20" strokeWidth="4.10958904109589" strokeDasharray="125.664" strokeDashoffset="100.53096491487338px"></circle>
      </svg>
      <div className={classes.progressCircleInfo}>{props.info}</div>
    </div>
  );
}

export default GraphCircle;
