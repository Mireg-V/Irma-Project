import React from 'react';
import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Accepter } from './components/Accepter';
import { Story } from './components/Story';
import { Links } from './components/Links';

export default function Main() {
  return (
    <main>
      <left>
        <AboutMe />
        <Education />
        <Skills />
        <Story />
        <Links />
      </left>
      <right>
        <Experience />
        <Accepter />
      </right>
    </main>
  );
}