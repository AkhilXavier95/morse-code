import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
}));
