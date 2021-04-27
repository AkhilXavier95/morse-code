import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import LearnMorse from "components/LearnMorse";
import MorseTree from "components/MorseTree";
import MorseCode from "components/MorseCode";

import useStyles from "./style";

function App({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
          icon={<RestoreIcon />}
          onClick={() => history.push("/learn")}
        />
        <BottomNavigationAction
          label="Code"
          icon={<FavoriteIcon />}
          onClick={() => history.push("/")}
        />
        <BottomNavigationAction
          label="Tree"
          icon={<LocationOnIcon />}
          onClick={() => history.push("/tree")}
        />
      </BottomNavigation>
    </>
  );
}

export default withRouter(App);
