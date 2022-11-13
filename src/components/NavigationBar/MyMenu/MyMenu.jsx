import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MyMenu(props) {
  const { menuVoice, handleMenuList, voiceNum } = props;
  let initY = (voiceNum & 1) === 0 ? -150 : 150;
  return (
    <motion.div
      initial={{ y: initY }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
    >
      <Link
        to={menuVoice.path}
        onClick={() => {
          handleMenuList(menuVoice.path, "select");
        }}
        style={menuVoice.style}
        onMouseOver={() => handleMenuList(menuVoice.path, "hover")}
        onMouseLeave={() => handleMenuList(menuVoice.path, "leave")}
      >
        <h2 style={{ fontSize: "2.5em" }}>
          {menuVoice.path === "/"
            ? "Home"
            : menuVoice.path.substring(1)[0].toUpperCase() +
              menuVoice.path.substring(2)}
        </h2>
      </Link>
    </motion.div>
  );
}

export { MyMenu };
