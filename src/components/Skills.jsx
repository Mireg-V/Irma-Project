import s from './Left.module.css'

export function Skills() {

  return (
    <div className={`${s.skills} ${s.default}`}>
      <h4>Languages</h4>
      <hr align='horizontal' />
      <ul>
        <li>
          <img src='english.webp' alt=''/>
          <p>English</p>
          <div>
            <section position='first' done='true' />
            <section done='true' />
            <section done='true' />
            <section done='true' level='B2' />
            <section />
            <section position='last' />
          </div>
        </li>
        <li>
          <img src='ucraine.webp' alt=''/>
          <p>Ukrainian</p>
          <div>
            <section position='first' done='true' />
            <section done='true' />
            <section done='true' />
            <section done='true' />
            <section done='true' />
            <section level='C2' done='true' position='last' />
          </div>
        </li>
        <li>
          <img src='poland.webp' alt=''/>
          <p>Polish</p>
          <div>
            <section position='first' done='true' />
            <section done='true'/>
            <section done='true' level='B1' />
            <section />
            <section />
            <section position='last' />
          </div>
        </li>
        <li>
          <img src='russia.webp' alt=''/>
          <p>Russian</p>
          <div>
            <section position='first' done='true' />
            <section done='true' />
            <section done='true' />
            <section done='true' />
            <section done='true' level='C1' />
            <section position='last' />
          </div>
        </li>
        <li>
          <img src='italy.webp' alt=''/>
          <p>Italian</p>
          <div>
            <section position='first' done='true' />
            <section done='true' />
            <section done='true' level='B1' />
            <section />
            <section />
            <section position='last' />
          </div>
        </li>
      </ul>
    </div>
  );
}