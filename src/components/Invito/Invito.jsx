import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import _break from "../../img/svg/break2.svg";
import std from "../../img/SaveTheDate.png";

const rootStyle = {
  marginRight: 0,
  marginLeft: 0,
  marginTop: "-1vh",
  backgroundSize: "cover",
  background:
    "linear-gradient(0deg, rgba(164,175,198,1) 0%, rgba(217,217,210,1) 100%)",
};

// const textStyle = {
//   color: "#102B4C",
//   // textShadow: "2px 2px #102B4C",
//   fontWeight: "bold",
// };

const ImgStyle = {
  marginRight: 0,
  marginLeft: 0,
  marginTop: "-35vh",
  backgroundSize: "cover",
};

function Invito() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [qHeight, setQHeight] = useState({
    height: window.innerHeight - 100,
    width: "auto",
  });

  useEffect(() => {
    if ((width/height) >= 1.137) {
    setQHeight({
      height: height - 100,
      width: "auto",
    });
  }
  else {
    setQHeight({
      height: "auto",
      width: width,
    });
  }
  }, [height, width]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <img src={_break} alt="break" style={ImgStyle} />
      <div style={rootStyle}>
        <Grid
          container
          direction="column"
          justify="space-between"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <img src={std} alt="Save the Date" style={qHeight} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { Invito };
