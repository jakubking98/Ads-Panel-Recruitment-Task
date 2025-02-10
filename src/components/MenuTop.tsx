import { useState } from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import { useMenuLogic } from "../utils/storage";
import { useStyles } from "../styles/customStyles";

const MenuTop = () => {
  const [isAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { buttonAction, buttonAction2, buttonText, buttonText2 } = useMenuLogic(
    currentPath,
    isAuthenticated,
    navigate
  );

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbarMenu}>
        <Avatar alt="Logo" src={logo} className={classes.awatarLogo} />

        {isMobile ? (
          <>
            <IconButton
              onClick={toggleDrawer(true)}
              style={{ color: "#4CAF50" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List className={classes.listMenu}>
                {currentPath === "/advertisements" ||
                  (currentPath === "/advertisements/new" && (
                    <ListItem
                      button
                      onClick={buttonAction2}
                      className={classes.listItemMenu}
                    >
                      <ListItemText
                        primary={buttonText2}
                        style={{ color: "#fff" }}
                      />
                    </ListItem>
                  ))}
                <ListItem
                  button
                  onClick={buttonAction}
                  className={classes.listItemMenu}
                >
                  <ListItemText
                    primary={buttonText}
                    style={{ color: "#fff" }}
                  />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box style={{ display: "flex", gap: "10px" }}>
            {currentPath === "/advertisements" ||
            currentPath === "/advertisements/new" ? (
              <>
                <Button
                  onClick={buttonAction2}
                  className={classes.buttonBorder}
                >
                  {buttonText2}
                </Button>
                <Button onClick={buttonAction} className={classes.buttonBorder}>
                  {buttonText}
                </Button>
              </>
            ) : (
              <Button onClick={buttonAction} className={classes.button}>
                {buttonText}
              </Button>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MenuTop;
