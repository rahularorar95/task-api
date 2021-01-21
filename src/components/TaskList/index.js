import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    borderRadius: "10px",
    color: theme.palette.text.secondary,
    marginTop: 10,
  },
  search: {
    color: "rgba(0,0,0,0.54)",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#5285EC", 0.15),
    "&:hover": {
      backgroundColor: fade("#5285EC", 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(0,0,0,0.54)",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  newTaskButton: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 10,
      marginBottom: 10,
    },
  },
  actions: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    marginBottom: 10,
  },
  rightActionGroup: {
    display: "flex",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      flexDirection: "column",
    },
  },

  taskListContainer: {
    marginTop: 30,
  },
}));

function TaskList({
  openDialog,
  taskList,
  toggleTaskStatus,
  hanleEditClick,
  handleDeleteClick,
}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [taskListCopy, setTaskListCopy] = useState([...taskList]); // using for search functionality

  useEffect(() => {
    setTaskListCopy(taskList);
    setSearchTerm("");
  }, [taskList]);

  const searchTask = (e) => {
    const searchText = e.target.value;
    const updatedTaskList = taskList.filter((task) =>
      task.description.includes(searchText)
    );
    setTaskListCopy(updatedTaskList);

    setSearchTerm(searchText);
  };

  return (
    <div className={classes.taskListContainer}>
      <div className={classes.actions}>
        <Button variant="text" disableRipple className={classes.newTaskButton}>
          <span style={{ color: "#537278" }}>Tasks</span>
        </Button>

        <div className={classes.rightActionGroup}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchTerm}
              onChange={searchTask}
            />
          </div>
          <Button
            onClick={openDialog}
            variant="contained"
            color="primary"
            className={classes.newTaskButton}
          >
            <AddIcon /> New Task
          </Button>
        </div>
      </div>

      <Paper className={classes.paper}>
        <List className={classes.list}>
          {taskListCopy?.map(({ id, description, completed }) => {
            const labelId = `checkbox-list-label-${id}`;

            return (
              <ListItem
                key={id}
                role={undefined}
                dense
                button
                onClick={() => toggleTaskStatus(id, completed)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={completed ? <s>{description}</s> : description}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => hanleEditClick(id, description)}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    onClick={() => handleDeleteClick(id)}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </div>
  );
}

export default TaskList;
