import React, { useEffect /*, useState*/ } from "react";
import Grid from "@mui/material/Grid";
// import container from "../../img/svg/container.svg";
import weddingList from "../../img/svg/wedding-list.svg";
import pageWallpaper from "../../img/wallpaperWedding3.jpeg";

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

const textStyle = {
  color: "#102B4C",
  textShadow: "1px 1px #D9D9D2",
  fontSize: "3em",
};

function ListaNozze() {
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  // const [imgWidth, setImgWidth] = useState({
  //   width: 400,
  //   height: 400,
  // });

  // useEffect(() => {
  //   if (width <= 400) {
  //     setImgWidth({
  //       width: width - 30,
  //       height: width - 30,
  //     });
  //   } else {
  //     setImgWidth({
  //       width: 400,
  //       height: 400,
  //     });
  //   }
  // }, [width]);

  useEffect(() => {
    const handleResize = () => {
      // setWidth(window.innerWidth);
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={rootStyle}
      >
        <Grid item>
          <img src={weddingList} alt="wedding list" width={60} height={60} />
        </Grid>
        <Grid item style={textStyle}>
          La nostra lista di nozze
        </Grid>
      </Grid>
    </>
  );
}

export { ListaNozze };
