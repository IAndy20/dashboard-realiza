import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/realiza-logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { motion } from "framer-motion";

const Sidebar = ({ expanded, setExpanded }) => {
  const [selected, setSelected] = useState(0);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-100%' /* Oculta completamente el sidebar */
    }
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '14rem' } : { left: '1rem' }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div>
      <motion.div 
        className='sidebar'
        variants={sidebarVariants}
        animate={expanded ? "true" : "false"}
      >
        {/* logo */}
        <div className="logo" style={{ width: 'auto', height: 'auto', overflow: 'hidden' }}>
          <img src={Logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>   

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
