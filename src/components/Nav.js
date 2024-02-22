import React, { useState, useEffect } from "react";
import styles from './Nav.module.css'
import NavigationButton from "./NavigationButton";
import config from '../config'

export default function Nav() {
  const [activePanel, setActivePanel] = useState(config.nav[0])
  return (
    <nav className={styles.nav}>
      {config.nav.map((text, index) => (
        <NavigationButton key={index} text={text} activePanel={activePanel} setActivePanel={setActivePanel} />
      ))}
    </nav>
  );
};