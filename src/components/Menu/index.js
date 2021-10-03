import {
  AppBar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();
  const length = useSelector((state) => state.cart.length);

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6">KenzieSHOP</Typography>
        </Box>

        <Box style={{ display: "flex" }}>
          <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
          <MenuItem onClick={() => sendTo("/cart")}>
            Carrinho
            <IconButton color="inherit">
              <Badge badgeContent={length} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </MenuItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
