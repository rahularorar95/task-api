import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 150,
        padding: theme.spacing(2),
        color: "#537278",
    },
}));

function LatestTask() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography variant="h6">Latest Created Task</Typography>
            <ul>
                <li>Clean the room</li>
                <li>{`${"Buy some vegitables, chicken, biryani test match nhi".substring(
                    0,
                    40
                )}...`}</li>
                <li>
                    <s>Reinstall windo and pc</s>
                </li>
            </ul>
        </Paper>
    );
}
export default LatestTask;
