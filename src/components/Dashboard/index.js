import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import TaskList from "../TaskList";
import DashboardSummary from "../DashboardSummary";
import Container from "../../container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />

      <Container>
        <DashboardSummary />

        <TaskList />

      </Container>
    </div>
  );
}

export default Dashboard;
