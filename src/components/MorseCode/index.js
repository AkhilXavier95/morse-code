import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";

const MorseCode = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.alphabets}>A</Typography>
        <div className={classes.inputContainer}>
          <TextField
            error={false}
            id="outlined-error"
            defaultValue="Hello World"
            variant="outlined"
            inputProps={{
              style: {
                height: 0,
              },
            }}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            OK
          </Button>
        </div>
      </Paper>
      <div className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained" color="primary">
          <RemoveIcon />
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          <FiberManualRecordIcon />
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
        <Button className={classes.buttonClear} variant="contained">
          clear
        </Button>
      </div>
    </div>
  );
};

export default MorseCode;
