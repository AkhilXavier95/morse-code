import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    paddingBottom: 50,
    height: "100vh",
    overflow: "hidden",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  tabPlane: {
    width: "100%",
    margin: "auto 0px",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textValue: {
    fontSize: 70,
    fontWeight: 500,
  },
  tab: {
    padding: "6px 20px 6px 12px",
  },
  dash: {
    margin: 5,
    height: 15,
    background: "#000",
    width: 35,
  },
  dot: {
    margin: 5,
    height: 15,
    width: 15,
    background: "#000",
    borderRadius: 50,
  },
}));

export default useStyles;
