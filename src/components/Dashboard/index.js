import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

function Dashboard() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            {/* Header */}
            <Header/>
            
            {/* DashboardStats */}

            {/* TasksList */}

        </div>
    )
}

export default Dashboard;
