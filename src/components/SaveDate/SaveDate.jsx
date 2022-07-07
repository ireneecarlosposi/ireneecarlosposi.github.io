import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Countdown } from "../Countdown/Countdown";
import _top from "../../img/top.svg";
import mare from "../../img/mare.mp4";

const rootStyle = {
  paddingTop: "10em",
  fontFamily: "Bodoni MT",
  fontStyle: "italic",
};
const textStyle = {
  color: "#EEFBFB",
  textShadow: "3px 3px #042F3E",
  fontSize: "6em",
  fontWeight: "bold",
};
const dateStyle = {
  color: "#EEFBFB",
  textShadow: "3px 3px #042F3E",
  fontSize: "3em",
  fontWeight: "bold",
};

const backgroundVideo = {
  position: "fixed",
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  zIndex: -100,
  transform: "translateX(-50%) translateY(-50%)",
  backgroundSize: "cover",
  transition: "1s opacity",
};

function SaveDate() {
  return (
    <div style={rootStyle}>
      <video style={{ ...backgroundVideo }} autoPlay loop muted>
        <source src={mare} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <img src={_top} alt="top" />
        </Grid>
        <Grid item>
          <h1 style={textStyle}>Carlo & Irene</h1>
        </Grid>
        <Grid item>
          <img src={_top} alt="top" style={{ transform: "rotate(180deg)" }} />
        </Grid>
        <Grid item>
          <motion.div
            initial={{ x: 550 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
          >
            <h3 style={dateStyle}> 27 May 2023 </h3>
          </motion.div>
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
          <motion.div
            initial={{ y: 1550 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
          >
            <Countdown />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}

export { SaveDate };
