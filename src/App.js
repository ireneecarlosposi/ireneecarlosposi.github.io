import "./style.css";
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes, Redirect } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { SaveDate } from "./components/SaveDate/SaveDate";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

// Style per il menu
const selectedStyle = {
  color: "#042F3E",
  textDecoration: "none",
  fontFamily: "Bodoni MT",
  textShadow: "1px 1px #F4ECF2",
};

const hoveredStyle = {
  color: "#458F9D",
  textDecoration: "none",
  fontFamily: "Bodoni MT",
  textShadow: "1px 1px #F4ECF2",
};

const leavedStyle = {
  color: "#F4ECF2",
  textDecoration: "none",
  fontFamily: "Bodoni MT",
  textShadow: "1px 1px #8D9BA6",
};

function App() {

  /*
  Menu:
  - path: /+<VoceMenu>
  - state: selected | leave
  - style: selectedStyle | leavedStyle
  */
  const [menuList, setMenuList] = useState([
    {
      path: "/home",
      state: "selected",
      style: selectedStyle,
    },
    {
      path: "/ceremony",
      state: "leave",
      style: leavedStyle,
    },
  ]);

  // Per ogni voce del menu decide se cambiare lo stato e lo style
  // o se si trova nello stato selected non succede nulla
  const handleMenuList = (path, event) => {
    let newMenuList = [];
    menuList.forEach((menuVoice) => {
      if (menuVoice.path === path) {
        if (event === "hover") {
          if (menuVoice.state !== "selected") {
            newMenuList.push({
              path: path,
              state: "hovered",
              style: hoveredStyle,
            });
          } else {
            newMenuList.push({
              ...menuVoice,
            });
          }
        }
        if (event === "leave") {
          if (menuVoice.state !== "selected") {
            newMenuList.push({
              path: path,
              state: "leaved",
              style: leavedStyle,
            });
          } else {
            newMenuList.push({
              ...menuVoice,
            });
          }
        }
        if (event === "select") {
          console.log("selecting");
          newMenuList.push({
            path: path,
            state: "selected",
            style: selectedStyle,
          });
        }
      } else {
        if (event !== "select") {
          newMenuList.push({
            ...menuVoice,
          });
        } else {
          newMenuList.push({
            path: menuVoice.path,
            state: "leaved",
            style: leavedStyle,
          });
        }
      }
    });
    console.log(newMenuList);
    setMenuList(newMenuList);
  };

  return (
    <HashRouter basename="https://ireneecarlosposi.github.io/ireneecarlosposi.github.io/">
      <NavigationBar menuList={menuList} handleMenuList={handleMenuList} />
      <Routes>
        <Route path="/home" element={<SaveDate />} />
        <Route element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
