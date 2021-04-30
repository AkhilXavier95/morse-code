import React from "react";
import Typography from "@material-ui/core/Typography";
import { morseJson } from "utils/helpers";

import useStyles from "./style";

const TabContent = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.textContainer}>
        <Typography className={classes.textValue}>
          {item.toUpperCase()}
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
        {morseJson[item].split("").map((el) => (
          <>
            {el === "." ? (
              <div className={classes.dot}></div>
            ) : (
              <div className={classes.dash}></div>
            )}
          </>
        ))}
      </div>
    </>
  );
};
export default TabContent;
