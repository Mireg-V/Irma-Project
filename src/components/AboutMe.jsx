import s from './AboutMe.module.css'
import avatar from '../images/avatar.png'
import { KeyRole } from './KeyRole'

export function AboutMe() {
  return (
    <div className={s.aboutMe}>
      <div className={s.head}>
        <img className={s.avatar} src={avatar} alt='Avatar'/>
        <p>Herasymchuk Mark</p>
      </div>
      <div className={s.bottom}>
            Любитель забивать гвозди микроскопом
        {/* <KeyRole role={'fullstack'} />
        <KeyRole role={'devops'} />
        <KeyRole role={'backend'} />
        <KeyRole role={'community'} /> */}
      </div>
    </div>
  )
}