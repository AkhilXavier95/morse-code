import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    width: "80%",
    margin: "10px auto",
    padding: 10,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  },
  button: {
    width: 100,
    margin: "0px 5px",
  },
  buttonClear: {
    width: 70,
    margin: "0px 5px",
  },
  alphabets: {
    display: "flex",
    justifyContent: "center",
    fontSize: 50,
    padding: 10,
    margin: "15px 1px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  navigationButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 50,
  },
  nvaButton: {
    background: "#0000000a",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
}));
