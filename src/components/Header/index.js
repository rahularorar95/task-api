import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 64,
  },
  username: {
    flexGrow: 1,
    textAlign: "start",
    color: "#537278",
  },
  profileImg: {
    borderRadius: 24,
  },
  layoutMargin: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

function Header({username}) {
  const classes = useStyles();
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("token")
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar className={classes.layoutMargin}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              height={48}
              className={classes.profileImg}
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="profile"
            />
          </IconButton>
          <Typography variant="h6" className={classes.username}>
            {username}
          </Typography>
          <Button onClick={logout}>
            <span style={{ color: "#537278" }}>Logout</span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
