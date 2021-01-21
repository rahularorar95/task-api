import React from "react";
import Grid from "@material-ui/core/Grid";
import TaskCompleted from "../TaskCompleted";
import LatestTask from "../LatestTask";
import TaskPieChart from "../TaskPieChart";
import { CardLoader } from "../ContentLoader";

function DashboardSummary({ taskList, contentLoading }) {
  const completedTasks = taskList.filter((task) => task.completed);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {contentLoading ? (
            <CardLoader />
          ) : (
            <TaskCompleted
              totalCompletedTasks={completedTasks.length}
              totalTasks={taskList.length}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          {contentLoading ? (
            <CardLoader />
          ) : (
            <LatestTask latestTasks={taskList.slice(-3).reverse()} />
          )}
        </Grid>

        <Grid item xs={12} sm={4}>
          {contentLoading ? (
            <CardLoader />
          ) : (
            <TaskPieChart
              totalCompletedTasks={completedTasks.length}
              totalTasks={taskList.length}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardSummary;
