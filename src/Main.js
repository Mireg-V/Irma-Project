import React from 'react';
import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';

export default function Main() {
  return (
    <main>
      <left>
        <AboutMe />
        <Education />
        <Skills />
      </left>
      <right>
        <Experience />
      </right>
    </main>
  );
}