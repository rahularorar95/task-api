import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import TaskList from "../TaskList";
import DashboardSummary from "../DashboardSummary";
import EmptyDashboard from '../EmptyDashboard'
import Container from "../../container";
import NewTaskDialog from "../NewTaskDialog"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

function Dashboard() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  const [tasks, updateTasks] = useState([]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const addTask = (task) => {
    console.log(task)
    updateTasks([...tasks, task])
    handleDialogClose()
  }
  return (
    <div className={classes.root}>

      <Header />
      {
        tasks.length > 0 ? (
          <Container>
            <DashboardSummary />
            <TaskList openDialog={handleDialogOpen} />
          </Container>

        ) : (<EmptyDashboard openDialog={handleDialogOpen} />)
      }

      <NewTaskDialog open={dialogOpen} closeDialog={handleDialogClose} addTask={addTask} />
    </div>
  );
}

export default Dashboard;
