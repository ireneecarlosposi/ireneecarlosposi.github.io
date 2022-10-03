import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { MyMenu } from "./MyMenu/MyMenu";

const rootCss = {
  //backgroundColor: "rgba(134, 154, 179 0.1)",
  boxShadow: "0 8px 28px 0 rgba( 134, 154, 179, 0.37 )",
  backdropFilter: "blur( 10px )",
  //borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  height: "5em",
  backgroundColor: "#869AB301",
};

function NavigationBar(props) {
  const { menuList, handleMenuList } = props;
  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      // setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let voiceNum = 0;
  return (
    <AppBar style={rootCss}>
      <Toolbar>
        <Grid
          container
          direction="row"
          //justify="space-between"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <div
              style={{
                fontWeight: "bold",
                textShadow: "1px 1px #102B4C",
                color: "#D9D9D2",
                fontSize: "2.5em",
              }}
            >
              I&C
            </div>
          </Grid>
          {width > 600 ? (
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                spacing={4}
              >
                {menuList.map((menuVoice) => (
                  <Grid key={menuVoice.path} item>
                    <MyMenu
                      key={menuVoice.path}
                      voiceNum={voiceNum++}
                      menuVoice={menuVoice}
                      handleMenuList={handleMenuList}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Grid item>
              <IconButton
                size="large"
                edge="start" // mia
                onClick={handleClick}
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {menuList.map((menuVoice) => (
                  <MenuItem key={menuVoice.path} onClick={handleClose}>
                    <Link
                      key={menuVoice.path}
                      to={menuVoice.path}
                      onClick={() => {
                        handleMenuList(menuVoice.path, "select");
                      }}
                      style={menuVoice.style}
                      onMouseOver={() =>
                        handleMenuList(menuVoice.path, "hover")
                      }
                      onMouseLeave={() =>
                        handleMenuList(menuVoice.path, "leave")
                      }
                    >
                      <h2
                        style={{
                          fontFamily: "Rosabelia",
                          fontSize: "1.5em",
                        }}
                      >
                        {menuVoice.path === "/"
                          ? "Home"
                          : menuVoice.path.substring(1)[0].toUpperCase() +
                            menuVoice.path.substring(2)}
                      </h2>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export { NavigationBar };
