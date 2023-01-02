import React, { useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

import Logo from "../../../../assets/images/logo.svg";
import {
  ABOUT_US_PAGE_PATH,
  CART_PAGE_PATH,
  PRODUCTS_PAGE_PATH,
} from "../../../../pages/router";
import { Link } from "react-router-dom";
import { useCart } from "../../../../contexts/cart";

function Header() {
  const cart = useCart();

  const cartItemsQty = useMemo(() => {
    return Object.values(cart.products).length;
  }, [cart.products]);

  const pages = [
    {
      label: "Productos",
      path: PRODUCTS_PAGE_PATH,
    },
    {
      label: "Sobre nosotros",
      path: ABOUT_US_PAGE_PATH,
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <IconButton>
              <img src={Logo} alt="Logo" />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/*menu de navegacion movil*/}
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link to={page.path}>
                    <Typography textAlign="center" color="black">
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/*menu de navegacion en escritorio */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.path}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    background: "#d2d0d0",
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/*car of compras*/}

          <Box sx={{ flexGrow: 0 }}>
            <Link to={CART_PAGE_PATH}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={cartItemsQty} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
