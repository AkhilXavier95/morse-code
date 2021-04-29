import React from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Typography } from "@material-ui/core";

const Completed = () => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.paper}
      elevation={3}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <CheckCircleOutlineIcon className={classes.successIcon} />
      </div>
      <Typography className={classes.successText}>
        <span>You have completed this level</span>
        <br />
        <span>continue to next level</span>
      </Typography>
    </Paper>
  );
};

export default Completed;
