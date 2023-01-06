import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import container from "../../img/svg/container.svg";
import weddingList from "../../img/svg/wedding-list.svg";
import ibanImg from "../../img/iban.png";
import airImg from "../../img/airplane.png";
import lvImg from "../../img/lv.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
// import sendImg from "../../img/send.png";
import pageWallpaper from "../../img/wallpaperWedding3.jpeg";

const rootStyle = {
  marginRight: 0,
  marginLeft: 0,
  minWidth: "100%",
  minHeight: "100%",
  paddingTop: "10em",
  backgroundSize: "cover",
};

const textStyle = {
  color: "#102B4C",
  textShadow: "1px 1px #D9D9D2",
  fontSize: "3em",
};

function ListaNozze() {
  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  const [imgDim, setImgDim] = useState({
    width: "auto",
    height: "auto",
  });
  const [gridWidth, setGridWidth] = useState({
    width: 1 / 2,
  });

  useEffect(() => {
    if (width <= 820) {
      setGridWidth({
        width: 1,
      });
    } else {
      setGridWidth({
        width: 1 / 2,
      });
    }
    if (width <= 600) {
      setImgDim({
        width: width - 50,
        height: "auto",
      });
    } else {
      setGridWidth({
        width: "auto",
        height: "auto",
      });
    }
  }, [width]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      // setHeight(window.innerHeight);
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
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={weddingList}
                  alt="wedding list"
                  width={60}
                  height={60}
                />
              </Grid>
              <Grid item style={textStyle}>
                La nostra lista di nozze
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={gridWidth}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>Contribuisci al nostro viaggio di nozze a:</Grid>
                    <Grid item>
                      <img
                        src={airImg}
                        alt="airplane"
                        width={30}
                        height={30}
                        style={{ marginRight: "1em" }}
                      />
                    </Grid>
                  </Grid>
                </Typography>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item>Las Vegas e Parchi Nazionali</Grid>
                  </Grid>
                </Typography>
                <Typography variant="h5" component="div">
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item>
                      <img
                        src={ibanImg}
                        alt="iban"
                        width={30}
                        height={30}
                        style={{ marginRight: "1em" }}
                      />
                    </Grid>
                    <Grid item>IT35B0103014200000012351161</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Intestatario: e20srl{" "}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Causale: Viaggio di nozze Carlino Manco
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={lvImg} alt="Las Vegas" style={imgDim} />
                    </Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { ListaNozze };

{
  /* <Grid item sx={gridWidth}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      Abbiamo selezionato una lista nozze presso:
                    </Grid>
////
                    <Grid item>
                    <img
                      src={sendImg}
                      alt="money"
                      width={30}
                      height={30}
                      style={{ marginRight: "1em" }}
                    />
                  </Grid>
////
                  </Grid>
                </Typography>
                <Typography variant="h5" component="div">
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
////
                    <Grid item>
                    <img
                      src={ibanImg}
                      alt="iban"
                      width={30}
                      height={30}
                      style={{ marginRight: "1em" }}
                    />
                  </Grid> 
///
                    <Grid item>Tamburini & C.</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <LocationOnIcon />
                    </Grid>
                    <Grid item>
                      Via Regina Margherita, 223, 73057 Taviano (LE)
                    </Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <PublicIcon />
                    </Grid>
                    <Grid item>Sito:</Grid>
                    <Grid item>
                      <a
                        aria-label="Sito web: tamburinistore.it "
                        data-tooltip="Apri sito web"
                        href="http://www.tamburinistore.it/"
                      >
                        tamburinistore.it
                      </a>
                    </Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
          </Grid> */
}
