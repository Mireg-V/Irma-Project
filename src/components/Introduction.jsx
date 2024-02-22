import React from "react";
import Video from './Video'
import styles from './Header.module.css'

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <Video />
    </div>
  );
};