import { AppBar, Box, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6">KenzieSHOP</Typography>
        <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
        <MenuItem onClick={() => sendTo("/cart")}>Carrinho</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
