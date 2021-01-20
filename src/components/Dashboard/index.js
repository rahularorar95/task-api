import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import TaskList from '../TaskList';
import Container from '../../container';


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
            
            <Container> 
            {/* DashboardStats */}

            {/* TasksList */}

            <TaskList />

            </Container>


        </div>
    )
}

export default Dashboard;
