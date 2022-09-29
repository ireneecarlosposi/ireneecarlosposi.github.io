import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Countdown } from "../Countdown/Countdown";
import { Story } from "../Story/Story";
import { Invito } from "../Invito/Invito";
import bg_video from "../../video/Onde2.mp4";
import _top from "../../img/svg/top.svg";

const rootStyle = {
  margin: 0,
  minWidth: "100%",
  minHeight: "100%",
  paddingTop: "10em",
  backgroundSize: "cover",
};
const textStyle = {
  color: "#D9D9D2",
  textShadow: "1px 1px #102B4C",
  fontSize: "5em",
};
const dateStyle = {
  color: "#102B4C",
  textShadow: "1px 1px #D9D9D2",
  fontSize: "2.5em",
};

const backgroundVideo = {
  position: "fixed",
  top: "27%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  zIndex: -100,
  transform: "translateX(-50%) translateY(-50%)",
  transition: "1s opacity",
  filter: "brightness(70%)",
};

function SaveDate() {
  const [width, setWidth] = useState(window.innerWidth);
  const [topWidth, setTopWidth] = useState({
    width: 340,
  });
  const [molt, setMolt] = useState(1);

  useEffect(() => {
    if (width < 450) {
      setMolt(1.7);
    } else {
      setMolt(1);
    }
    if (width < 340) {
      setTopWidth({
        width: width - 30,
      });
    } else {
      setTopWidth({
        width: 340,
      });
    }
  }, [width]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={rootStyle}>
        <video style={{ ...backgroundVideo }} webkit-playsinline playsInline autoPlay loop muted>
          <source src={bg_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ zIndex: 1 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <img src={_top} alt="top" style={topWidth} />
            </Grid>
            <Grid item>
              <div style={textStyle}>Irene & Carlo</div>
            </Grid>
            <Grid item>
              <img
                src={_top}
                alt="top"
                style={{ transform: "rotate(180deg)", ...topWidth }}
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
        <Story molt={molt} />
        <Invito />
      </div>
    </>
  );
}

export { SaveDate };
