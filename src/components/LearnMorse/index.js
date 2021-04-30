import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { learArray } from "utils/helpers";
import TabContent from "./TabContent";
import useStyles from "./style";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const LearnMorse = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {learArray.map((el, idx) => (
          <Tab
            className={classes.tab}
            label={el.toUpperCase()}
            {...a11yProps(idx)}
          />
        ))}
      </Tabs>
      {learArray.map((el, idx) => (
        <TabPanel value={value} index={idx} className={classes.tabPlane}>
          <TabContent item={el} />
        </TabPanel>
      ))}
    </div>
  );
};

export default LearnMorse;
