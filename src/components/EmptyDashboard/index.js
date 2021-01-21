import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    width: "18%",
    margin: "auto",
    padding: theme.spacing(2),
    marginTop: "10%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  grayColor: {
    color: "#537278",
  },
  newTaskButton: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1),
  },
}));

function EmptyDashboard({ openDialog }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.grayColor}>
        You have no task
      </Typography>

      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
        className={classes.newTaskButton}
      >
        <AddIcon /> New Task
      </Button>
    </Paper>
  );
}

export default EmptyDashboard;
