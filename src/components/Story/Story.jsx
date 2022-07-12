import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import fiori from "../../img/svg/fiori.svg";
import fourteen from "../../img/img_story/2014.JPG";
import fifteen from "../../img/img_story/2015.JPG";
import { Gif } from "@mui/icons-material";

const rootStyle = { marginTop: "-1em", backgroundColor: "#F3F4F5" };

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
          <h1>La nostra Storia</h1>
        </Grid>
        <Grid item>
          <img src={fiori} alt="fiori" />
        </Grid>
        <Grid item>
          <img
            src={fourteen}
            alt="2014"
            width="467"
            height="350"
            style={{
              marginLeft: "50%",
              borderStyle: "solid",
              borderWidth: 5,
              borderColor: "#000000",
            }}
          />
        </Grid>
        <Grid item>
          <img
            src={fifteen}
            alt="2015"
            width="400"
            height="400"
            style={{
              marginTop: "-15em",
              marginRight: "15em",
              borderStyle: "solid",
              borderWidth: 5,
              borderColor: "#000000",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export { Story };
