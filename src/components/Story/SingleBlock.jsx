import React from "react";
import Grid from "@mui/material/Grid";

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 5,
  borderColor: "#D9D9D2",
};

function SingleBlock(props) {
  const { img1, year, wi1, hi1 } = props;

  return (
    <>
      <Grid item>
        <h1
          style={{
            marginTop: "-1%",
            fontSize: "4vw",
            color: "#102B4C",
            textShadow: "1px 1px #D9D9D2",
          }}
        >
          {year}
        </h1>
        <img
          src={img1}
          alt={year}
          style={{
            width: wi1,
            height: hi1,
            marginLeft: "10vw",
            marginTop: "-16%",
            ...borderStyle,
          }}
        />
      </Grid>
      <Grid item>
        <div style={{ borderLeft: "2px solid #102B4C", height: "72px" }}></div>
      </Grid>
    </>
  );
}

export { SingleBlock };
