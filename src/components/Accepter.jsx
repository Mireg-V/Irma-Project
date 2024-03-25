import s from './Right.module.css'

export function Accepter() {
  return (
    <div className={s.accepter}>
      <img src='smile-emoji.webp' alt='' />
      <p>Here is the place to place my experience in your company.</p>
      <h6>
        <span>Made by</span>Mireg<span>from</span><img src='impactium.svg' className={s.impactium} alt=''/>Impactium<span>with</span><img className={s.heart} src='heart.svg' alt=''/></h6>
    </div>
  );
}