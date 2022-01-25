import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardCapacity from '../components/CardCapacity';
import CardGraphStatistics from '../components/CardGraphStatistics';

const Dashboard = () => {

  const ElementsCardInfo = [1,2,3,4] 
  const ElementsCardStatistics = [1,2,3] 

  const useStyles = makeStyles(theme => ({
    container: {
      marginTop: 40,
      marginBottom: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    containCardCapacity:{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width: '100%'
    },
    containCardGraphStatistics:{
      marginTop: '4rem',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width: '100%'
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.containCardCapacity}>
        {
          ElementsCardInfo.map((el) => {
            return <CardCapacity key={el} />
          })
        }
      </div>
      <div className={classes.containCardGraphStatistics}>
        {
          ElementsCardStatistics.map((el) => {
            return <CardGraphStatistics key={el} />
          })
        }
      </div>
    </div>
  )
}

export default Dashboard