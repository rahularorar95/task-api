import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  newTaskButton: {
    margin: 10,
  },
  inputContainer: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#5285EC", 0.15),
    "&:hover": {
      backgroundColor: fade("#5285EC", 0.25),
    },
    margin: "auto",
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
}));

function NewTaskDialog({ open, onClose }) {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        <Button variant="text" disableRipple>
          New Task
        </Button>
      </DialogTitle>
      <div className={classes.inputContainer}>
        <InputBase
          placeholder="Task Name"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "" }}
        />
      </div>
      <Button
        onClick={handleClose}
        variant="contained"
        color="primary"
        className={classes.newTaskButton}
      >
        <AddIcon /> New Task
      </Button>
    </Dialog>
  );
}

export default NewTaskDialog;
