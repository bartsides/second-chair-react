import { Gavel } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { steps } from "../../config/steps";
import "./NavMenu.css";

export default function NavMenu() {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleProfileMenu = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const topLeftOrigin = { vertical: "top", horizontal: "left" };
  const topRightOrigin = { vertical: "top", horizontal: "right" };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={menuAnchorEl}
            anchorOrigin={topLeftOrigin}
            keepMounted
            transformOrigin={topLeftOrigin}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>
              <div class="menu-icon">
                <Gavel />
              </div>
              Trials
            </MenuItem>
            {steps.map((step, index) => {
              return (
                <MenuItem key={index}>
                  <div class="menu-icon">{step.icon}</div>
                  {step.title}
                </MenuItem>
              );
            })}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Second Chair
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="profile-menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="profile-menu-appbar"
            anchorEl={profileMenuAnchorEl}
            anchorOrigin={topRightOrigin}
            keepMounted
            transformOrigin={topRightOrigin}
            open={Boolean(profileMenuAnchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
}
