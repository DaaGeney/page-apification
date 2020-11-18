import AccountCircle from "@material-ui/icons/AccountCircle";
import { CustomAppBar } from "./styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CustomButton } from "./styles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getToken } from "../../utils/helpers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const MenuCustomAppBar = (props: any) => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (getToken()) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    localStorage.removeItem("userInfoSotware");
    setAuth(false);
    props.history.push("/logIn");
  };

  const onLogin = () => props.history.push("/logIn");

  return (
    <div className={classes.root}>
      <CustomAppBar position="static">
        <Toolbar>
          {auth && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            RiskCred
          </Typography>
          {auth && (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-CustomAppBar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-CustomAppBar"
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Sign out</MenuItem>
              </Menu>
              <SideBar
                {...props}
                open={sidebar}
                onClose={() => setSidebar(false)}
              />
            </>
          )}
          {!auth && <CustomButton onClick={onLogin}>LogIn</CustomButton>}
        </Toolbar>
      </CustomAppBar>
    </div>
  );
};

export default MenuCustomAppBar;
