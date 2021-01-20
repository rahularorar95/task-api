import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TaskCompleted from "../TaskCompleted";
import LatestTask from "../LatestTask";
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

function DashboardSummary() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TaskCompleted />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LatestTask />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardSummary;
