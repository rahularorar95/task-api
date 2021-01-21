import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { axiosLogin } from "../../apis";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    borderRadius: "10px",
    color: theme.palette.text.secondary,
    margin: "auto",
    marginTop: "30vh",
    width: "20%",

    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  inputContainer: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#5285EC", 0.15),
    "&:hover": {
      backgroundColor: fade("#5285EC", 0.25),
    },
    margin: "auto",
    padding: 5,
    width: "70%",
    marginTop: "20px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    width: "100%",
  },
  loginButton: {
    margin: "20px",
    width: "70%",
  },
}));

function Login({ setLoginStatus }) {
  const classes = useStyles();
  let history = useHistory();
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const login = () => {
    axiosLogin
      .post("/login", { username: name })
      .then((res) => {
        if (res.status === 200) {
          setLoginStatus(res.data.token, res.data.username);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">
        <b>Login</b>
      </Typography>
      <div className={classes.inputContainer}>
        <InputBase
          placeholder="Name"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={name}
          onChange={handleChange}
        />
      </div>
      <Button
        onClick={login}
        variant="contained"
        color="primary"
        className={classes.loginButton}
      >
        Login
      </Button>
    </Paper>
  );
}

export default Login;
