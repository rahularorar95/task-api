import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    padding: theme.spacing(2),
    color: "#537278",
  },
}));

function LatestTask({ latestTasks }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h6">Latest Created Task</Typography>
      <ul>
        {latestTasks.map((task) =>
          task.completed ? (
            <li>
              <s>{task.description}</s>
            </li>
          ) : (
            <li>{task.description}</li>
          )
        )}
      </ul>
    </Paper>
  );
}
export default LatestTask;
