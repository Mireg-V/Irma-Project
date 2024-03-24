import s from './Left.module.css'

export function Place({ image, name, years, speciality, link }) {

  return (
    <div className={s.place}>
      <img src={image} alt='' />
      <div className={s.description}>
        <div className={s.name}>
          <img src='/point.svg' alt=''/>
          <p>{name}</p>
          <span>{years}</span>
        </div>
        <div className={s.speciality}>
          <p>{speciality}</p>
          {link && (
            <a href={link}><img src='/chain.svg' alt='' />Attached file</a>
          )}
        </div>
      </div>
    </div>
  );
}