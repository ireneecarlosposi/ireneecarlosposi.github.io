import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { Menu } from "./Menu/Menu";

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
  let voiceNum = 0;
  return (
    <AppBar style={rootCss}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          {menuList.map((menuVoice) => (
            <Grid key={menuVoice.path} item>
              <Menu
                key={menuVoice.path}
                voiceNum={voiceNum++}
                menuVoice={menuVoice}
                handleMenuList={handleMenuList}
              />
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export { NavigationBar };
