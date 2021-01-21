import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  newTaskButton: {
    padding: 10,
    marginTop: 10,
  },
  inputContainer: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#5285EC", 0.15),
    "&:hover": {
      backgroundColor: fade("#5285EC", 0.25),
    },
    margin: "auto",
    padding: 8,
    width: "90%",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  dialog: {
    padding: 15,
  },

  customPadding: {
    padding: "8px 16px",
  },
}));

function NewTaskDialog({
  open,
  closeDialog,
  handleAddTask,
  editTask,
  editTaskObject,
  handleEditTask,
  resetEditTask,
}) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => {
    setInputValue("");
    closeDialog();
    resetEditTask();
  };

  useEffect(() => {
    setInputValue(editTaskObject.description);
  }, [editTaskObject]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addUpdateTask = (taskDescription) => {
    if (taskDescription) {
      if (editTask) {
        handleEditTask(taskDescription);
      } else {
        handleAddTask(taskDescription);
      }

      setInputValue("");
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle
        id="simple-dialog-title"
        classes={{ root: classes.customPadding }}
      >
        <Button variant="text" disableRipple>
          {editTask ? <b>Update Task</b> : <b>New Task</b>}
        </Button>
      </DialogTitle>
      <div className={classes.inputContainer}>
        <InputBase
          placeholder="Task Name"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <Button
        onClick={() => addUpdateTask(inputValue)}
        variant="contained"
        color="primary"
        className={classes.newTaskButton}
      >
        {editTask ? <b>Update Task</b> : <b>New Task</b>}
      </Button>
    </Dialog>
  );
}

export default NewTaskDialog;
