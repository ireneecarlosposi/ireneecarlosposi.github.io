import React from "react";
import Grid from "@mui/material/Grid";

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 5,
  borderColor: "#D9D9D2",
};

function DoubleBlock(props) {
  const { img1, img2, years, wi1, wi2, hi1, hi2, ti2, mli1, mri2 } = props;

  return (
    <>
      <Grid item>
        <h1
          style={{
            // marginTop: "-12%",
            marginLeft: "5vw",
            fontSize: "4vw",
            color: "#102B4C",
            textShadow: "1px 1px #D9D9D2",
          }}
        >
          {years}
        </h1>
        <img
          src={img1}
          alt={years.split(" - ")[0]}
          style={{
            marginTop: "-14%",
            width: wi1,
            height: hi1,
            marginLeft: mli1,
            ...borderStyle,
          }}
        />
      </Grid>
      <Grid item>
        <img
          src={img2}
          alt={years.split(" - ")[1]}
          style={{
            width: wi2,
            height: hi2,
            marginTop: ti2,
            marginRight: mri2,
            ...borderStyle,
          }}
        />
      </Grid>
      <Grid item>
        <div style={{ borderLeft: "2px solid #102B4C", height: "24px" }}></div>
      </Grid>
    </>
  );
}

export { DoubleBlock };
