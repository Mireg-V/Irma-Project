import s from './Left.module.css'
import { Place } from './Place';

export function Education() {

  return (
    <div className={`${s.education} ${s.default}`}>
      <h4>Education</h4>
      <hr align='horizontal' />
      <Place image='/rdhu.png' name='RSHU' years='09.2022 - 06.2026' speciality='121 - Software engineering' />
      <hr align='horizontal' />
      <Place image='/fermi.png' name='ITST Fermi Frascati' years='09.2022 - 08.2024' speciality='Informatics and cybersecurity' />
      <hr align='horizontal' />
      <Place image='/cisco.png' name='Cisco Academy' years='03.2023 - 11.2023' speciality='Java & Cybersecurity' link='https://cdn.impactium.fun/cisco-certificate.pdf' />
    </div>
  );
}