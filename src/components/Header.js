import React from "react";
import styles from './Header.module.css'
import Nav from "./Nav";
import logo from '../favicon.png'
import AnimatedButton from "./AnimatedButton";

export default function Header({ toggleExternals }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} height={50} width={undefined} alt="" />
        <h1>Irma Tarolog</h1>
      </div>
      <Nav />
      <AnimatedButton text='Отримати консультацію' action={toggleExternals} />
    </header>
  );
};