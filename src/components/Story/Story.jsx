import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import fiori from "../../img/svg/fiori.svg";
import fourteen from "../../img/img_story/2014.JPG";
import fifteen from "../../img/img_story/2015.JPG";

const rootStyle = {
  marginTop: "-1em",
  //backgroundColor: "#d7ad89" };
  background:
    "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(215,173,137,1) 100%)",
};

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 5,
  borderColor: "#000000",
};

function Story() {
  return (
    <div style={rootStyle}>
      <Grid
        container
        direction="column"
        justify="space-between"
        justifyContent="center"
        alignItems="center"
        style={{ ...rootStyle }}
      >
        <Grid item>
          <h1 style={{ fontSize: "3em" }}>La nostra Storia</h1>
        </Grid>
        <Grid item>
          <img src={fiori} alt="fiori" />
        </Grid>
        <Grid item>
          <h1
            style={{ marginTop: "-10%", marginLeft: "15em", fontSize: "3em" }}
          >
            2014 - 2015
          </h1>
          <img
            src={fourteen}
            alt="2014"
            // width="467"
            // height="350"
            style={{
              width: "27em",
              height: "21em",
              marginLeft: "50%",
              ...borderStyle,
            }}
          />
        </Grid>
        <Grid item>
          <img
            src={fifteen}
            alt="2015"
            // width="400"
            // height="400"
            style={{
              width: "25em",
              height: "25em",
              marginTop: "-15em",
              marginRight: "15em",
              ...borderStyle,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export { Story };
