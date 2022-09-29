import "./style.css";
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { SaveDate } from "./components/SaveDate/SaveDate";
import { Location } from "./components/Location/Location";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

// Style per il menu
const selectedStyle = {
  color: "#d9d9d2",
  textDecoration: "none",
  textShadow: "1px 1px #102B4C",
};

const hoveredStyle = {
  color: "#A4AFC6",
  textDecoration: "none",
  textShadow: "1px 1px #d9d9d2",
};

const leavedStyle = {
  color: "#102B4C",
  textDecoration: "none",
  textShadow: "1px 1px #d9d9d2",
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
      path: "/",
      state: "selected",
      style: selectedStyle,
    },
    {
      path: "/Location",
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
    <HashRouter>
      <NavigationBar menuList={menuList} handleMenuList={handleMenuList} />
      <Routes>
        <Route path="/" element={<SaveDate />} />
        <Route path="/Location" element={<Location />} />
        <Route element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
