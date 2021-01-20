import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
    root: {
      height: 150,
      padding: theme.spacing(2),
      borderRadius: "10px",
    },
    grayColor: {
      color: "#537278",
    },
  }));
function TaskPieChart({ totalCompletedTasks, totalTasks }) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
        
       <PieChart
        data={[
          { title: 'Completed Tasks', value: totalCompletedTasks, color: '#5285EC' },
          { title: 'Remaining Tasks', value: totalTasks-totalCompletedTasks, color: '#E8ECEC' },
        ]}
      />;
      </Paper>
    )
}

export default TaskPieChart
