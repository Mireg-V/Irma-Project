import s from './Left.module.css'
import { Link } from './Link';

export function Links() {

  return (
    <div className={`${s.links} ${s.default}`}>
      <h4>Links</h4>
      <hr align='horizontal' />
      <Link type='Telegram' href='https://t.me/MiregX' />
      <Link type='LinkedIn' href='https://www.linkedin.com/in/mireg/' />
      <Link type='WhatsApp' href='https://wa.me/380669683611' />
      <Link type='Viber' href='viber://chat?number=380669683611' />
      <Link type='email' href='mailto:markgerasimchuk8@gmail.com' />
      <Link type='djinni' href='https://djinni.co/q/5fb5a218a6/' />
      <Link type='GitHub' href='https://github.com/MiregX/' />
    </div>
  );
}
