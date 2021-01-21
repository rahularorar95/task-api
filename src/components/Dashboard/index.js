import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import TaskList from "../TaskList";
import DashboardSummary from "../DashboardSummary";
import EmptyDashboard from "../EmptyDashboard";
import Container from "../../container";
import NewTaskDialog from "../NewTaskDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  const [editTask, setEditTask] = useState(false);
  const [editTaskObject, setEditTaskObject] = useState({});

  const [taskList, updateTaskList] = useState([
    {
      id: 1,
      description: "test",
      completed: true,
    },
    {
      id: 2,
      description: "test2",
      completed: false,
    },
    {
      id: 3,
      description: "test6",
      completed: true,
    },
    {
      id: 4,
      description: "test34",
      completed: false,
    },
    {
      id: 5,
      description: "test5",
      completed: true,
    },
  ]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAddTask = (taskDescription) => {
    console.log(taskDescription);
    updateTaskList([
      ...taskList,
      {
        id: Math.floor(Math.random() * 100),
        description: taskDescription,
        completed: false,
      },
    ]);
    handleDialogClose();
  };

  const handleEditTask = (taskDescription) => {
    const selectedTaskId = editTaskObject.id;

    const updatedTaskList = taskList.map((task) =>
      task.id === selectedTaskId
        ? { ...task, description: taskDescription }
        : task
    );

    updateTaskList(updatedTaskList);

    resetEditTask();
    handleDialogClose();
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    updateTaskList(updatedTaskList);
  };

  const hanleEditClick = (taskId, taskDescription) => {
    setEditTask(true);
    setEditTaskObject({ id: taskId, description: taskDescription });
    setDialogOpen(true);
  };

  const handleDeleteClick = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    updateTaskList(updatedTaskList);
  };

  const resetEditTask = () => {
    setEditTask(false);
    setEditTaskObject({});
  };
  return (
    <div className={classes.root}>
      <Header />
      {taskList.length > 0 ? (
        <Container>
          <DashboardSummary taskList={taskList} />
          <TaskList
            openDialog={handleDialogOpen}
            taskList={taskList}
            toggleTaskStatus={toggleTaskStatus}
            hanleEditClick={hanleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </Container>
      ) : (
        <EmptyDashboard openDialog={handleDialogOpen} />
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
