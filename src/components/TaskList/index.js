import React, { useState } from "react";
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
import NewTaskDialog from '../NewTaskDialog'

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
}));

function TaskList() {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const handleNewTaskOpen = () => {
    setDialogOpen(true);
  };

  const handleNewTaskClose = () => {
    setDialogOpen(false);
  };
  return (
    <div>
      <NewTaskDialog open={dialogOpen} onClose={handleNewTaskClose} />

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
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button
            onClick={handleNewTaskOpen}
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
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={() => handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={
                    checked.indexOf(value) !== -1 ? (
                      <s>Line item {value + 1}</s>
                    ) : (
                      `Line item ${value + 1}`
                    )
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>

                  <IconButton edge="end" aria-label="delete">
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
