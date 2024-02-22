import React from "react";
import styles from './Nav.module.css'
import NavigationButton from "./NavigationButton";
import { signal } from "@preact/signals-react";

export const activeButton = signal(null);

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {['Послуги', 'Про мене', 'Етапи роботи', 'Результати', 'Відгуки', 'Сертифікати', 'Питання', 'Контакти'].map((text, index) => (
        <NavigationButton key={index} text={text} />
      ))}
    </nav>
  );
};