import React from "react";
import Grid from "@mui/material/Grid";
import notfound from "../../img/404.jpeg";

function NotFound() {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src={notfound} alt="not found" />
        </Grid>
      </Grid>
    </div>
  );
}

export { NotFound };
