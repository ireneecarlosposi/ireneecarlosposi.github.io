import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Countdown } from "../Countdown/Countdown";
import { Story } from "../Story/Story";
import bg_video from "../../video/gallipoli.mp4";
import _top from "../../img/svg/top.svg";

const rootStyle = {
  margin: 0,
  minWidth: "100%",
  minHeight: "100%",
  paddingTop: "10em",
  backgroundSize: "cover",
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
  transition: "1s opacity",
};

function SaveDate() {
  return (
    <>
      <div style={rootStyle}>
        <video style={{ ...backgroundVideo }} playsInline autoPlay loop muted>
          <source src={bg_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
              <img
                src={_top}
                alt="top"
                style={{ transform: "rotate(180deg)" }}
              />
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
        <Story />
      </div>
    </>
  );
}

export { SaveDate };
