import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TaskCompleted from "../TaskCompleted";
import LatestTask from "../LatestTask";
import TaskPieChart from "../TaskPieChart";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function DashboardSummary({ taskList }) {
  const classes = useStyles();
  const completedTasks = taskList.filter((task) => task.completed);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TaskCompleted
            totalCompletedTasks={completedTasks.length}
            totalTasks={taskList.length}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LatestTask latestTasks={taskList.slice(-3).reverse()} />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TaskPieChart
            totalCompletedTasks={completedTasks.length}
            totalTasks={taskList.length}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardSummary;
