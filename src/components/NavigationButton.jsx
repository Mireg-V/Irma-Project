import React from "react";
import styles from './Nav.module.css'
import { activeButton } from "./Nav";
import { computed, effect } from "@preact/signals-react";

export default function NavigationButton({ text }) {
  const handleClick = (text) => {
    activeButton.value = text;
  }

  const isButtonActive = computed(() => {
    console.log(activeButton.value, text)
    return activeButton.value === text
  });

  effect(() => {
    console.log(activeButton.value)
  })

  return (
    <button className={`${styles.button} ${isButtonActive.value && styles.active}`} onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};