import s from './Left.module.css'

export function Link({ type, href }) {

  return (
    <a href={href} className={`${s.link} ${s[type.toLowerCase()]}`}>
      <img src={`/${type.toLowerCase()}.svg`} alt='' />
      {type}
    </a>
  );
}