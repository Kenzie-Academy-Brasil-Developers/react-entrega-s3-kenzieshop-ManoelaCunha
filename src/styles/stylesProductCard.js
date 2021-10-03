import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  box: {
    maxWidth: "864px",
    display: "flex",
    margin: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  title: {
    color: "darkblue",
    marginTop: "40px",
    marginBottom: "20px",
    textShadow: "1px 1px 2px darkgrey",
  },
  titleTwo: {
    color: "darkblue",
    textShadow: "1px 1px 2px darkgrey",
  },
  cardOrder: {
    width: "830px",
    marginTop: "25px",
    padding: "10px",
    textAlign: "left",
  },
  card: {
    margin: "8px",
    width: "200px",
    paddingBottom: "10px",
  },
  image: {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    boxShadow: "0em 0.1em 0 black",
  },
  text: {
    margin: "5px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
