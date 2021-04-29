import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import RemoveIcon from "@material-ui/icons/Remove";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import TextField from "@material-ui/core/TextField";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { useStyles } from "./styles";
import { learArray, morseJson } from "utils/helpers";
import Completed from "./Completed";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MorseCode = () => {
  const classes = useStyles();

  const [item, setItem] = useState("a");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [completedItems, setCompletedItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleButtonClick = (symbol) => {
    if (symbol === 0) {
      setValue(value + "-");
    } else {
      setValue(value + ".");
    }
  };

  const handleClear = () => {
    const str = value.substring(0, value.length - 1);
    setValue(str);
  };

  const handlePrev = () => {
    const index = learArray.indexOf(item);
    setItem(learArray[index - 1]);
    setValue("");
    setError(false);
  };

  const handleNext = () => {
    const index = learArray.indexOf(item);
    setItem(learArray[index + 1]);
    setValue("");
    setError(false);
  };

  const handleSubmit = () => {
    if (morseJson[item] && morseJson[item] === value) {
      const cCompletedItems = [...completedItems];
      cCompletedItems.push(item);
      setCompletedItems(cCompletedItems);
      handleNext();
      setError(false);
    } else {
      setError(true);
      setValue("");
    }
    setOpen(true);
  };

  return (
    <div className={classes.container}>
      {completedItems.indexOf(item) > -1 ? (
        <Completed />
      ) : (
        <>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.alphabets}>
              {item.toUpperCase()}
            </Typography>
            <div className={classes.inputContainer}>
              <TextField
                error={error}
                id="outlined-error"
                variant="outlined"
                value={value}
                inputProps={{
                  style: {
                    height: 0,
                  },
                  onKeyDown: (e) => e.preventDefault(),
                }}
              />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                OK
              </Button>
            </div>
          </Paper>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick(0)}
            >
              <RemoveIcon />
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick(1)}
            >
              <FiberManualRecordIcon style={{ fontSize: 10 }} />
            </Button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
          >
            <Button
              className={classes.buttonClear}
              variant="contained"
              onClick={handleClear}
            >
              clear
            </Button>
          </div>
        </>
      )}
      <div
        className={classes.navigationButtonContainer}
        style={
          learArray.indexOf(item) === 0 ? { justifyContent: "flex-end" } : {}
        }
      >
        <IconButton
          style={learArray.indexOf(item) === 0 ? { display: "none" } : {}}
          aria-label="prev"
          className={classes.nvaButton}
          onClick={handlePrev}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          aria-label="next"
          style={
            learArray.indexOf(item) === learArray.length - 1
              ? { display: "none" }
              : {}
          }
          className={classes.nvaButton}
          onClick={handleNext}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={error ? "error" : "success"}>
          {error ? "Your answer is wrong" : "Your answer is correct!"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MorseCode;
