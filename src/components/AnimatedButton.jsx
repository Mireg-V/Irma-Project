import React from "react";
import styles from './Header.module.css'

export default function AnimatedButton({ text, action }) {
  return (
    <button className={styles.animatedButton} onClick={action} >
      {text}
    </button>
  );
};