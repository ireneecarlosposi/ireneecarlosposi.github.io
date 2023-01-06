import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import { ErrorAlert } from "./ErrorAlert";
import SendIcon from "@mui/icons-material/Send";
import pageWallpaper from "../../img/bgw.jpeg";
import { sendPartecipazione } from "../../API.js";

const rootStyle = {
  marginRight: 0,
  marginLeft: 0,
  minWidth: "100%",
  minHeight: "100%",
  paddingTop: "10em",
  backgroundSize: "cover",
};
const formStyle = {
  marginRight: 0,
  marginLeft: 0,
  minWidth: "100%",
  minHeight: "100%",
  paddingTop: "3em",
};

const textStyle = {
  color: "#102B4C",
  textShadow: "1px 1px #D9D9D2",
  fontSize: "3em",
};

function Partecipazioni(props) {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [allergie, setAllergie] = useState("");
  const [partecipa, setPartecipa] = useState(1);
  const [notte, setNotte] = useState(0);
  const [mezzo, setMezzo] = useState(0);
  const [npartecipanti, setNpartecipanti] = useState(1);
  const [open, setOpen] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [imgWidth, setImgWidth] = useState({
    width: 400,
    height: 400,
  });

  useEffect(() => {
    if (width / height >= 1.5) {
      setImgWidth({
        height: height + 50,
        width: "auto",
      });
    } else {
      setImgWidth({
        height: "auto",
        width: width + 50,
      });
    }
  }, [height, width]);

  const handleOpen = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPartecipazione = {
      nome: nome,
      email: email,
      allergie: allergie,
      partecipa: partecipa,
      npartecipanti: npartecipanti,
      notte: notte,
      mezzo: mezzo,
    };

    let valid = true;
    if (nome === "") {
      console.log("n", nome);
      valid = false;
    }
    if (email === "") {
      console.log("e", email);
      valid = false;
    }
    if (parseInt(partecipa) !== 0 && parseInt(partecipa) !== 1) {
      console.log("p", partecipa);
      valid = false;
    }
    if (
      parseInt(mezzo) !== 0 &&
      parseInt(mezzo) !== 1 &&
      parseInt(mezzo) !== 2
    ) {
      console.log("m", mezzo);
      valid = false;
    }
    if (parseInt(npartecipanti) < 1) {
      console.log("np", npartecipanti);
      valid = false;
    }
    if (parseInt(notte) !== 0 && parseInt(notte) !== 1) {
      console.log("no", notte);
      valid = false;
    }

    if (valid) {
      sendPartecipazione(newPartecipazione);
      setSubmitted(true);
      props.sendPartecipation();
    } else {
      setErrorMessage("Error(s) in the form, please fix it.");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <img
        src={pageWallpaper}
        alt="wallpaper"
        style={{
          marginRight: 0,
          marginLeft: 0,
          backgroundSize: "container",
          position: "fixed",
          zIndex: -100,
        }}
      />
      {submitted ? (
        <Navigate to="/" />
      ) : (
        <div style={rootStyle}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            style={{ zIndex: 1 }}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                style={{
                  boxShadow: "0 8px 28px 0 rgba( 134, 154, 179, 0.37 )",
                  backdropFilter: "blur( 10px )",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )",
                  padding: "2em",
                  borderRadius: "15px",
                  backgroundColor: "#869AB301",
                }}
              >
                <Grid item>
                  <ErrorAlert
                    open={open}
                    handleOpen={handleOpen}
                    errorMessage={errorMessage}
                  />
                </Grid>
                <Grid item style={textStyle}>
                  <strong>Parteciperai?</strong>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={4}
                    style={formStyle}
                  >
                    <Grid item>
                      <TextField
                        label="Nome e Cognome"
                        id="Nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Email"
                        id="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <RadioGroup
                        row
                        name="partecipa"
                        value={partecipa}
                        onChange={(e) => {
                          setPartecipa(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Si, parteciperò!"
                        />
                        <FormControlLabel
                          value={0}
                          control={<Radio />}
                          label="Purtroppo non posso esserci."
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Numero Partecipanti"
                        id="npartecipanti"
                        type="number"
                        InputProps={{ inputProps: { min: 1 } }}
                        value={npartecipanti}
                        onChange={(e) => setNpartecipanti(e.target.value)}
                      />
                    </Grid>

                    <Grid item>
                      <FormControl>
                        <FormLabel id="row-night-radio-buttons-group-label">
                          Hai bisogno di un pernottamento per la notte del 27
                          Maggio?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="row-night-radio-buttons-group-label"
                          name="notte"
                          value={notte}
                          onChange={(e) => {
                            setNotte(e.target.value);
                          }}
                        >
                          <FormControlLabel
                            value={1}
                            control={<Radio />}
                            label="Si, vengo da fuori."
                          />
                          <FormControlLabel
                            value={0}
                            control={<Radio />}
                            label="No, abito nelle vicinanze."
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item>
                      <FormControl>
                        <FormLabel id="row-device-radio-buttons-group-label">
                          Come verrai all'evento?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="row-device-radio-buttons-group-label"
                          name="mezzo"
                          value={mezzo}
                          onChange={(e) => {
                            setMezzo(e.target.value);
                          }}
                        >
                          <FormControlLabel
                            value={2}
                            control={<Radio />}
                            label="In aereo."
                          />
                          <FormControlLabel
                            value={1}
                            control={<Radio />}
                            label="In treno."
                          />
                          <FormControlLabel
                            value={0}
                            control={<Radio />}
                            label="In auto."
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item>
                      <TextField
                        id="allergie"
                        label="Allergie alimentari?"
                        multiline
                        rows={4}
                        onChange={(e) => setAllergie(e.target.value)}
                      />
                    </Grid>

                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSubmit}
                        endIcon={<SendIcon />}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export { Partecipazioni };
