import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    position: "fixed",
    left: 0,
    bottom: 0,
  },
}));

export default useStyles;
