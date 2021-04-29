import React from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";

const Completed = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={3}>
      You have completed this level
    </Paper>
  );
};

export default Completed;
