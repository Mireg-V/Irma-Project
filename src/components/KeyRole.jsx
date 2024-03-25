import React from 'react';
import s from './Right.module.css'

export function KeyRole({ role }) {
  const map = {
    fullstack: 'Fullstack Developer',
    backend: 'Backend Developer',
    devops: 'Development & Operations',
    community: 'Community Analyst'
  }
  
  return (
    <div className={`${s.role} ${s[role]}`}>
      {map[role]}
      <img src={`/${role}.svg`} alt=''/>
  </div>
  );
};