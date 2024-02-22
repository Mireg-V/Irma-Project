import React from "react";
import styles from './Nav.module.css'

export default function NavigationButton({ text, activePanel, setActivePanel }) {
  return (
    <button className={`${styles.button} ${activePanel === text && styles.active}`} onClick={() => setActivePanel(text)}>
      {text}
    </button>
  );
}; 