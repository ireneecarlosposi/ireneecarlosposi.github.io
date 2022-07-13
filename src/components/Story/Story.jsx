import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import fiori from "../../img/svg/fiori.svg";
import fourteen from "../../img/img_story/2014.JPG";
import fifteen from "../../img/img_story/2015.JPG";
import seventeen from "../../img/img_story/2017.JPG";
import eightteen from "../../img/img_story/2018.JPG";
import nineteen from "../../img/img_story/2019.JPG";
import twenty from "../../img/img_story/2020.JPG";
import twentyone from "../../img/img_story/2021.JPG";
import twentytwo from "../../img/img_story/2022.JPG";
import rings from "../../img/img_story/rings.png";
import wave from "../../img/svg/wave.svg";

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 5,
  borderColor: "#000000",
};

function Story() {
  const [width, setWidth] = useState(window.innerWidth);
  const [rootStyle, setRootStyle] = useState({
    marginRight: 0,
    marginLeft: 0,
    marginTop: "-1vh",
    backgroundSize: "cover",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(215,173,137,1) 100%)",
  });
  const [ImgStyle, setImgStyle] = useState({
    marginRight: 0,
    marginLeft: 0,
    marginTop: "50vh",
    backgroundSize: "cover",
  });

  useEffect(() => {
    if (width > 600) {
      setRootStyle({
        marginRight: 0,
        marginLeft: 0,
        marginTop: "-1vh",
        backgroundSize: "cover",
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(215,173,137,1) 100%)",
      });
      setImgStyle({
        marginRight: 0,
        marginLeft: 0,
        marginTop: "50vh",
        backgroundSize: "cover",
      });
    } else {
      setRootStyle({
        marginRight: 0,
        marginLeft: 0,
        minWidth: "120%",
        marginTop: "-1vh",
        backgroundSize: "cover",
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(215,173,137,1) 100%)",
      });
      setImgStyle({
        marginRight: 0,
        marginLeft: 0,
        marginTop: "50vh",
        backgroundSize: "cover",
        minWidth: "120%",
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
      <img src={wave} alt="wave" style={ImgStyle} />
      <div style={rootStyle}>
        <Grid
          container
          direction="column"
          justify="space-between"
          justifyContent="center"
          alignItems="center"
          //style={{ ...rootStyle }}
        >
          <Grid item>
            <h1 style={{ fontSize: "3em" }}>La nostra Storia</h1>
          </Grid>
          <Grid item>
            <img src={fiori} alt="fiori" />
          </Grid>
          <Grid item>
            <h1
              style={{ marginTop: "-12%", marginLeft: "55vw", fontSize: "4vw" }}
            >
              2014 - 2015
            </h1>
            <img
              src={fourteen}
              alt="2014"
              style={{
                width: "35vw",
                height: "29vw",
                marginLeft: "35vw",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <img
              src={fifteen}
              alt="2015"
              style={{
                width: "30vw",
                height: "30vw",
                marginTop: "-23vw",
                marginRight: "25vw",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <div
              style={{ borderLeft: "3px solid #000000", height: "24px" }}
            ></div>
          </Grid>
          <Grid item>
            <h1 style={{ marginTop: "-1%", fontSize: "4vw" }}>2017</h1>
            <img
              src={seventeen}
              alt="2017"
              style={{
                width: "29vw",
                height: "35vw",
                marginLeft: "10vw",
                marginTop: "-16%",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <div
              style={{ borderLeft: "3px solid #000000", height: "72px" }}
            ></div>
          </Grid>
          <Grid item>
            <h1 style={{ marginLeft: "5vw", fontSize: "4vw" }}>2018 - 2019</h1>
            <img
              src={eightteen}
              alt="2018"
              style={{
                width: "33vw",
                height: "27vw",
                marginLeft: "35vw",
                marginTop: "-12%",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <img
              src={nineteen}
              alt="2019"
              style={{
                width: "30vw",
                height: "30vw",
                marginTop: "-23vw",
                marginRight: "25vw",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <div
              style={{ borderLeft: "3px solid #000000", height: "72px" }}
            ></div>
          </Grid>
          <Grid item>
            <h1 style={{ marginLeft: "5vw", fontSize: "4vw" }}>2020 - 2021</h1>
            <img
              src={twenty}
              alt="2020"
              style={{
                width: "29vw",
                height: "35vw",
                marginLeft: "25vw",
                marginTop: "-12%",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <img
              src={twentyone}
              alt="2021"
              style={{
                width: "29vw",
                height: "35vw",
                marginTop: "-30vw",
                marginRight: "25vw",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <div
              style={{ borderLeft: "3px solid #000000", height: "24px" }}
            ></div>
          </Grid>
          <Grid item>
            <h1 style={{ marginTop: "-1%", fontSize: "4vw" }}>2022</h1>
            <img
              src={twentytwo}
              alt="2022"
              style={{
                width: "35vw",
                height: "29vw",
                marginLeft: "10vw",
                marginTop: "-14%",
                ...borderStyle,
              }}
            />
          </Grid>
          <Grid item>
            <div
              style={{ borderLeft: "3px solid #000000", height: "72px" }}
            ></div>
          </Grid>
          <Grid item>
            <img
              src={rings}
              alt="rings"
              style={{
                width: "7vw",
                height: "7vw",
              }}
            />
          </Grid>
          <Grid item>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "serif",
                fontSize: "2vw",
              }}
            >
              This is where our
            </h1>
          </Grid>
          <Grid item>
            <h1
              style={{
                marginTop: "-5%",
                fontFamily: "serif",
                textAlign: "center",
                fontSize: "5vw",
              }}
            >
              FOREVER
              <br />
              BEGINS!
            </h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { Story };
