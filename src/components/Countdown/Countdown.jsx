import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const rootStyle = { paddingTop: "1em", zIndex: 2 };
const textStyle = {
  fontWeight: "bold",
  color: "#D9D9D2",
  textShadow: "1px 1px #102B4C",
  fontSize: "1.5em",
};
const timeStyle = {
  fontSize: "2em",
  color: "#D9D9D2",
  textShadow: "1px 1px #102B4C",
};

function calculateTimeLeft() {
  const difference = new Date(`05/27/2023`) - new Date(); //The + before the new Date object is shorthand to tell JavaScript to cast the object as an integer
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: "10em", ...rootStyle }}
      >
        <Grid
          item
          style={{
            color: "#102B4C",
            fontSize: "1.5em",
            textShadow: "1px 1px #D9D9D2",
          }}
        >
          ~ Just ~
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        style={rootStyle}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            justify="space-between"
            spacing={4}
            style={{ paddingBottom: "8em" }}
          >
            <Grid item style={textStyle}>
              Days:
            </Grid>
            <Grid item style={timeStyle}>
              {timeLeft["days"]}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            justify="space-between"
            spacing={4}
            style={{ paddingBottom: "8em" }}
          >
            <Grid item style={textStyle}>
              Hours:
            </Grid>
            <Grid item style={timeStyle}>
              {timeLeft["hours"]}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            justify="space-between"
            spacing={4}
            style={{ paddingBottom: "8em" }}
          >
            <Grid item style={textStyle}>
              Minutes:
            </Grid>
            <Grid item style={timeStyle}>
              {timeLeft["minutes"]}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            justify="space-between"
            spacing={4}
            style={{ paddingBottom: "8em" }}
          >
            <Grid item style={textStyle}>
              Seconds:
            </Grid>
            <Grid item style={timeStyle}>
              {timeLeft["seconds"]}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export { Countdown };
