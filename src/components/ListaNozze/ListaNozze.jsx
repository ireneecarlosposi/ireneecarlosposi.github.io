import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import pageWallpaper from "../../img/wallpaperWedding.jpeg";

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

function ListaNozze() {
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
    {/* <img
        src={pageWallpaper}
        alt="wallpaper"
        style={{
          marginRight: 0,
          marginLeft: 0,
          minWidth: "100%",
          minHeight: "100%",
          backgroundSize: "auto",
          position: "fixed",
          zIndex: -100,
        }}
      /> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        style={rootStyle}
      >
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
    </>
  );
}

export { ListaNozze };
