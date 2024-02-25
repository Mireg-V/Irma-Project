import s from './AboutMe.module.css'
import avatar from '../images/avatar.png'
import devIcon from '../images/code.svg'
import { Skill } from './Skill'

export function AboutMe() {
  return (
    <div className={s.aboutMe}>
      <div className={s.head}>
        <img className={s.avatar} src={avatar} alt='Avatar'/>
        <div className={s.conteiner}>
          <img className={s.background} src={'https://cdn.impactium.fun/ui/diamond-full-pattern.svg'} alt=''/>
          <p>Herasymchuk Mark</p>
          <div className={s.title}>
            <img src={devIcon} height={32} alt='' />
            <h1>Fullstack Developer</h1>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.skillsWrapper} >
          <Skill type='node' />
          <Skill type='react' />
          <Skill type='javascript' />
          <Skill type='typescript' />
          <Skill type='next' />
          <Skill type='docker' />
        </div>
      </div>
    </div>
  )
}