import React from "react";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from '@mui/material/Alert';

function ErrorAlert(props) {
  const { open, handleOpen, errorMessage } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        {errorMessage ? (
          <Collapse in={open}>
            <Alert
              error
              variant="outlined"
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handleOpen}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {errorMessage}
            </Alert>
          </Collapse>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
}
export { ErrorAlert };