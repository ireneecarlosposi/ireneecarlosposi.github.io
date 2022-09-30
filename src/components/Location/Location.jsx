import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import chiesaImg from "../../img/madonnaDelCanneto.png";
import villaImg from "../../img/villaVergine.png";

const rootStyle = {
  marginRight: 0,
  marginLeft: 0,
  minWidth: "100%",
  minHeight: "100%",
  paddingTop: "10em",
  backgroundSize: "cover",
  // background:
  //   "linear-gradient(0deg, rgba(164,175,198,1) 0%, rgba(217,217,210,1) 100%)",
};

function Location() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [imgWidth, setImgWidth] = useState({
    width: 400,
    height: 400,
  });

  useEffect(() => {
    if (width <= 400) {
      setImgWidth({
        width: width - 30,
        height: width - 30,
      });
    } else {
      setImgWidth({
        width: 400,
        height: 400,
      });
    }
  }, [width]);

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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        style={rootStyle}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img
                src={chiesaImg}
                alt="Chiesa Madonna del Canneto"
                style={imgWidth}
              />
            </Grid>
            <Grid item>
              <h1
                style={{
                  fontFamily: "serif",
                  fontSize: "4.5em",
                  color: "#102B4C",
                  margin: 0,
                }}
              >
                Ceremony
              </h1>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1.5em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Ore 16:30
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Santuario di Maria SS. del Canneto
              </div>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                P.za Moro Aldo, 1
              </div>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Gallipoli (LE)
              </div>
            </Grid>
            <Grid item>
              <iframe
                title="MadonnaDelCanneto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.9171198507343!2d17.978831315793105!3d40.05495047940877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1346a65c44b30129%3A0xcccebf80255547db!2sMadonna%20del%20Canneto%20church!5e0!3m2!1sit!2sit!4v1664446525408!5m2!1sit!2sit"
                style={{ border: 0, ...imgWidth }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
        {/*###############################################*/}
        {width > 400 ? (
          <Grid item>
            <div
              style={{
                borderLeft: "1px solid #102B4C",
                height: height / 2,
              }}
            ></div>
          </Grid>
        ) : (
          <></>
        )}
        {/*###############################################*/}
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img src={villaImg} alt="Villa Vergine" style={imgWidth} />
            </Grid>
            <Grid item>
              <h1
                style={{
                  fontFamily: "serif",
                  fontSize: "3.5em",
                  color: "#102B4C",
                  margin: 0,
                }}
              >
                Receiving
              </h1>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1.5em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Ore 19:00
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Villa Vergine
              </div>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Strada Provinciale Collepasso Noha
              </div>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "1em",
                  color: "#102B4C",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Cutrofiano (LE)
              </div>
            </Grid>
            <Grid item>
              <iframe
                title="VillaVergine"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.1671209457545!2d18.163194715794617!3d40.11627897940124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134418dd7729fee1%3A0xd0869e773dec6348!2sVilla%20Vergine%20Srl!5e0!3m2!1sit!2sit!4v1664446712113!5m2!1sit!2sit"
                width="600"
                height="450"
                style={{ border: 0, ...imgWidth }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export { Location };
