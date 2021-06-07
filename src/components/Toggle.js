import React, { useState } from "react";
import {motion} from 'framer-motion'
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 style={{cursor:'pointer'}} >{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </div>
  );
};

export default Toggle;
