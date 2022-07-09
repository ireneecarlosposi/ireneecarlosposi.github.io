import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Countdown } from "../Countdown/Countdown";
import _top from "../../img/svg/top.svg";


const rootStyle = {
  paddingTop: "10em",
  //fontFamily: "Arioso",
};
const textStyle = {
  color: "#EEFBFB",
  textShadow: "2px 2px #042F3E",
  fontSize: "4em",
  fontWeight: "bold",
};
const dateStyle = {
  color: "#EEFBFB",
  textShadow: "2px 2px #042F3E",
  fontSize: "2em",
  fontWeight: "bold",
};


function SaveDate() {
  return (
    <div style={rootStyle}>
      
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <img src={_top} alt="top" />
          </Grid>
          <Grid item>
            <div style={textStyle}>Irene & Carlo</div>
          </Grid>
          <Grid item>
            <img src={_top} alt="top" style={{ transform: "rotate(180deg)" }} />
          </Grid>
        </Grid>
        <Grid item>
          <h3 style={dateStyle}> 27 May 2023 </h3>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        justify="space-between"
        spacing={4}
      >
        <Grid item>
          <Countdown />
        </Grid>
      </Grid>
    </div>
  );
}

export { SaveDate };
