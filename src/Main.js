import React from 'react';
import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience';

export default function Main() {
  return (
    <main>
      <left>
        <AboutMe />
      </left>
      <right>
        <Experience />
      </right>
    </main>
  );
}