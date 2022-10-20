import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import st from "./style.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector } from "../../../redux/selector/selector";
import { logout } from "../../../redux/action/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const isAuth = useSelector(isAuthSelector);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.clear();
  };

  return (
    // <AppBar
    //   className={st.header}
    //   position="fixed"
    //   sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    // >
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className={st.toolbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          // onClick={handleDrawerToggle}
          // sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        {isAuth ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Link to="/profile">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem>
                <div className={st.login} onClick={handleLogout}>
                  Logout
                </div>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              className={st.login}
              onClick={() =>
                navigate("/auth/login", {
                  state: { auth: true, pathName: location.pathname },
                })
              }
            >
              Login
            </div>
            <div
              className={st.login}
              onClick={() =>
                navigate("/auth/registration", {
                  state: { auth: true, pathName: location.pathname },
                })
              }
            >
              Registeration
            </div>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
