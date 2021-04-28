import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import CodeIcon from "@material-ui/icons/Code";
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded";
import LearnMorse from "components/LearnMorse";
import MorseTree from "components/MorseTree";
import MorseCode from "components/MorseCode";

import useStyles from "./style";

const getBottomNavValue = (pathname) => {
  if (pathname === "/learn") {
    return 0;
  } else if (pathname === "/tree") {
    return 2;
  }
  return 1;
};

function App({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  useEffect(() => {
    const {
      location: { pathname },
    } = history;
    setValue(getBottomNavValue(pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" render={(props) => <MorseCode {...props} />} />
        <Route
          exact
          path="/learn"
          render={(props) => <LearnMorse {...props} />}
        />
        <Route
          exact
          path="/tree"
          render={(props) => <MorseTree {...props} />}
        />
      </Switch>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Learn"
          icon={<ImportContactsIcon />}
          onClick={() => history.push("/learn")}
        />
        <BottomNavigationAction
          label="Code"
          icon={<CodeIcon />}
          onClick={() => history.push("/")}
        />
        <BottomNavigationAction
          label="Tree"
          icon={<AccountTreeRoundedIcon />}
          onClick={() => history.push("/tree")}
        />
      </BottomNavigation>
    </>
  );
}

export default withRouter(App);
