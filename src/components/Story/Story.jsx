import React from "react";
import Grid from "@mui/material/Grid";
import { SingleBlock } from "./SingleBlock";
import { DoubleBlock } from "./DoubleBlock";
import fiori from "../../img/svg/fiori.svg";
import fourteen from "../../img/img_story/2014.JPG";
import fifteen from "../../img/img_story/2015.JPG";
import seventeen from "../../img/img_story/2017.JPG";
import eightteen from "../../img/img_story/2018.JPG";
import nineteen from "../../img/img_story/2019.JPG";
import twenty from "../../img/img_story/2020.JPG";
import twentyone from "../../img/img_story/2021.JPG";
import twentytwo from "../../img/img_story/2022.JPG";
import rings from "../../img/img_story/ringsC.png";
import _break from "../../img/svg/break.svg";

// const borderStyle = {
//   borderStyle: "solid",
//   borderWidth: 5,
//   borderColor: "#D9D9D2",
// };

const rootStyle = {
  marginRight: 0,
  marginLeft: 0,
  marginTop: "-1vh",
  backgroundSize: "cover",
  background:
    "linear-gradient(0deg, rgba(130,145,136,1) 0%, rgba(217,217,210,1) 100%)",
};

const ImgStyle = {
  marginRight: 0,
  marginLeft: 0,
  marginTop: "-25vh",
  backgroundSize: "cover",
};

function Story(props) {
  const { molt } = props;
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
            <h1 style={{ fontSize: "3em", color: "#102B4C" }}>
              La nostra Storia
            </h1>
          </Grid>
          <Grid item>
            <img src={fiori} alt="fiori" />
          </Grid>
          <DoubleBlock
            years="2014 - 2015"
            img1={fourteen}
            wi1={String(35 * molt) + "vw"}
            hi1={String(29 * molt) + "vw"}
            img2={fifteen}
            wi2={String(30 * molt) + "vw"}
            hi2={String(30 * molt) + "vw"}
            ti2="-23vw"
            mli1={String(27 * (molt > 1 ? molt - 0.4 : molt)) + "vw"}
            mri2={String(25 * molt) + "vw"}
          />
          <SingleBlock
            year="2017"
            img1={seventeen}
            wi1={String(29 * molt) + "vw"}
            hi1={String(35 * molt) + "vw"}
          />
          <DoubleBlock
            years="2018 - 2019"
            img1={eightteen}
            wi1={String(35 * molt) + "vw"}
            hi1={String(29 * molt) + "vw"}
            img2={nineteen}
            wi2={String(30 * molt) + "vw"}
            hi2={String(30 * molt) + "vw"}
            ti2="-23vw"
            mli1={String(27 * (molt > 1 ? molt - 0.4 : molt)) + "vw"}
            mri2={String(25 * molt) + "vw"}
          />
          <DoubleBlock
            years="2020 - 2021"
            img1={twenty}
            wi1={String(29 * molt) + "vw"}
            hi1={String(35 * molt) + "vw"}
            img2={twentyone}
            wi2={String(29 * molt) + "vw"}
            hi2={String(35 * molt) + "vw"}
            ti2="-30vw"
            mli1={String(27 * (molt > 1 ? molt - 0.4 : molt)) + "vw"}
            mri2={String(25 * molt) + "vw"}
          />
          <SingleBlock
            year="2022"
            img1={twentytwo}
            wi1={String(35 * molt) + "vw"}
            hi1={String(29 * molt) + "vw"}
          />
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
                fontSize: "1em",
                color: "#D9D9D2",
              }}
            >
              Ready to live our
            </h1>
          </Grid>
          <Grid item>
            <h1
              style={{
                marginTop: "-5%",
                fontFamily: "serif",
                textAlign: "center",
                fontSize: "2.5em",
                color: "#D9D9D2",
                paddingBottom: "10vw",
              }}
            >
              FOREVER!
            </h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { Story };
