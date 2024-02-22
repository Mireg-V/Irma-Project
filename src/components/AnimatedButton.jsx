import React from "react";
import styles from './Header.module.css'

export default function AnimatedButton({ text }) {
  return (
    <button className={styles.animatedButton}>
      {text}
    </button>
  );
};