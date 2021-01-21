import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  layoutMargin: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

function Container({ children }) {
  const classes = useStyles();
  return <div className={classes.layoutMargin}>{children}</div>;
}

export default Container;
