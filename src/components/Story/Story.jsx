import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import fiori from "../../img/svg/fiori.svg";
import fourteen from "../../img/img_story/2014.JPG";
import fifteen from "../../img/img_story/2015.JPG";
import wave from "../../img/svg/wave.svg";

// const rootStyle = {
//   marginRight: 0,
//   marginLeft: 0,
//   // minWidth: "120%",
//   // minHeight: "120%",
//   marginTop: "50vh",
//   backgroundSize: "cover",
//   background:
//     "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(215,173,137,1) 100%)",
// };

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
              style={{ marginTop: "-10%", marginLeft: "55vw", fontSize: "3vw" }}
            >
              2014 - 2015
            </h1>
            <img
              src={fourteen}
              alt="2014"
              style={{
                width: "27vw",
                height: "21vw",
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
                width: "25vw",
                height: "25vw",
                marginTop: "-15vw",
                marginRight: "15vw",
                ...borderStyle,
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { Story };
