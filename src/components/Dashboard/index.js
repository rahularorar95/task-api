import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import TaskList from "../TaskList";
import DashboardSummary from "../DashboardSummary";
import EmptyDashboard from "../EmptyDashboard";
import Container from "../../container";
import NewTaskDialog from "../NewTaskDialog";
import { axiosAuth } from "../../apis";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Dashboard({ username }) {
  const classes = useStyles();
  const history = useHistory();
  const [contentLoading, setContentLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [editTaskObject, setEditTaskObject] = useState({});
  const [taskList, updateTaskList] = useState([]);

  useEffect(() => {
    axiosAuth
      .get("/tasks")
      .then((res) => {
        setContentLoading(false);
        if (res.status === 200) {
          updateTaskList(res.data);
        }
      })
      .catch((err) => {
        setContentLoading(false);
        //unauthorized
        if (err.response.status === 401) {
          redirectToLogin();
        }
      });
  }, []);

  const redirectToLogin = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAddTask = (taskDescription) => {
    axiosAuth
      .post("/tasks", { description: taskDescription })
      .then((res) => {
        if (res.status === 201) {
          const newTask = res.data;
          updateTaskList([...taskList, newTask]);
        }
      })
      .catch((err) => {
        //unauthorized
        if (err.response.status === 401) {
          redirectToLogin();
        }
      });

    handleDialogClose();
  };

  const handleEditTask = (taskDescription) => {
    const selectedTaskId = editTaskObject.id;
    axiosAuth
      .patch(`/tasks/${selectedTaskId}`, { description: taskDescription })
      .then((res) => {
        if (res.status === 200) {
          const updatedTaskList = taskList.map((task) =>
            task.id === selectedTaskId
              ? { ...task, description: taskDescription }
              : task
          );
          updateTaskList(updatedTaskList);
        }
      })
      .catch((err) => {
        //unauthorized
        if (err.response.status === 401) {
          redirectToLogin();
        }
      });

    resetEditTask();
    handleDialogClose();
  };

  const toggleTaskStatus = (taskId, completed) => {
    axiosAuth
      .patch(`/tasks/${taskId}`, { completed: !completed })
      .then((res) => {
        if (res.status === 200) {
          const updatedTaskList = taskList.map((task) =>
            task.id === taskId ? { ...task, completed: !completed } : task
          );
          updateTaskList(updatedTaskList);
        }
      })
      .catch((err) => {
        //unauthorized
        if (err.response.status === 401) {
          redirectToLogin();
        }
      });
  };

  const hanleEditClick = (taskId, taskDescription) => {
    setEditTask(true);
    setEditTaskObject({ id: taskId, description: taskDescription });
    setDialogOpen(true);
  };

  const handleDeleteClick = (taskId) => {
    axiosAuth
      .delete(`/tasks/${taskId}`)
      .then((res) => {
        if (res.status === 200) {
          const updatedTaskList = taskList.filter((task) => task.id !== taskId);
          updateTaskList(updatedTaskList);
        }
      })
      .catch((err) => {
        //unauthorized
        if (err.response.status === 401) {
          redirectToLogin();
        }
      });
  };

  const resetEditTask = () => {
    setEditTask(false);
    setEditTaskObject({});
  };

  return (
    <div className={classes.root}>
      <Header username={username} />
      {!contentLoading && taskList.length <= 0 ? (
        <EmptyDashboard openDialog={handleDialogOpen} />
      ) : (
        <Container>
          <DashboardSummary
            taskList={taskList}
            contentLoading={contentLoading}
          />
          <TaskList
            openDialog={handleDialogOpen}
            taskList={taskList}
            toggleTaskStatus={toggleTaskStatus}
            hanleEditClick={hanleEditClick}
            handleDeleteClick={handleDeleteClick}
            contentLoading={contentLoading}
          />
        </Container>
      )}

      <NewTaskDialog
        open={dialogOpen}
        closeDialog={handleDialogClose}
        handleAddTask={handleAddTask}
        editTask={editTask}
        editTaskObject={editTaskObject}
        handleEditTask={handleEditTask}
        resetEditTask={resetEditTask}
      />
    </div>
  );
}

export default Dashboard;
