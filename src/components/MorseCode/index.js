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

import { useStyles } from "./styles";
import { learArray, morseJson } from "utils/helpers";

const MorseCode = () => {
  const classes = useStyles();

  const [item, setItem] = useState("a");
  const [value, setValue] = useState("");

  const handleButtonClick = (symbol) => {
    console.log({ symbol });
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
  };

  const handleNext = () => {
    const index = learArray.indexOf(item);
    setItem(learArray[index + 1]);
    setValue("");
  };

  const handleSubmit = () => {
    if (morseJson[item] && morseJson[item] === value) {
      handleNext();
    }
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.alphabets}>
          {item.toUpperCase()}
        </Typography>
        <div className={classes.inputContainer}>
          <TextField
            error={false}
            id="outlined-error"
            variant="outlined"
            value={value}
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
        <Button
          className={classes.buttonClear}
          variant="contained"
          onClick={handleClear}
        >
          clear
        </Button>
      </div>
      <div className={classes.navigationButtonContainer}>
        <IconButton
          aria-label="prev"
          className={classes.nvaButton}
          onClick={handlePrev}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          aria-label="next"
          className={classes.nvaButton}
          onClick={handleNext}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default MorseCode;
