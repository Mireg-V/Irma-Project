/* eslint-disable react/style-prop-object */
import s from './Experience.module.css'

export function Work({type, children}) {
  const map = {
    impactium: {
      start: '02.01.2021',
      end: false,
      logo: '/impactium-dimmed.svg',
      name: 'Impactium',
      properties: {
        peoples: 5,
        hours: 40,
        mode: 'Full-remote',
        modeIcon: '/remote.svg',
        location: 'Ucraine',
        site: 'https://impactium.fun'
      },
      description: `Мой батя долбашит вообще адовые блюда. 
         Ну такой вот примерно рецепт усредненный, потому что
         вариаций масса. Берется суп, он не греется, греть - 
         это не про моего батю. Он берет это суп, вываливает
         его на сковороду и начинает жарить. Добавляет в него 
         огромное количество лука, чеснока, перца черного и 
         красного МУКИ! для вязкости, томатная паста сверху. 
         Все это жарится до дыма. Потом снимается с огня и 
         остужается на балконе. Потом батя заносит и щедро 
         полив майонезом начинает есть. При этом ест со сковороды 
         шкрябая по ней ложкой. Ест и приговаривает полушепотом ух 
         блѣ. При этом у него на лбу аж пот выступает. Любезно мне 
         иногда предлагает, но я отказываюсь. Надо ли говорить о 
         том какой дичайший пердеж потом? Вонища такая, что 
         обои от стен отклеиваются.`,
      positions: [
        {
          code: 'fullstack',
          title: 'Fullstack Developer'
        },
        {
          code: 'community',
          title: 'Community Analyst'
        }
      ]
    },
    datacode: {
      start: '12.05.2023',
      end: '14.12.2023',
      logo: '/datacode.png',
      name: '',
      properties: {
        peoples: 46,
        hours: 10,
        mode: 'Hybrid',
        modeIcon: '/hybrid.svg',
        location: 'Italy',
        site: 'https://datacode.it'
      },
      description: `Аутсорсинговая компания. Работал в гибридном формате. Иногда приезжал в офис на open-space. Первых три месяца проходил стажировку, паралельно выполняя поставленные задачи. Тим-лид дважды в неделю проводил код-ревью, где мы решали проблемы кода и реализовывали маштабируемость. Всего за время работы поменял четыре проекта, где практически везде использовался React в качестве клиентской стороны, Node.js на фреймворке Express как серверная часть, и MongoDB для хранения данных. Время от времени общался с клиентами в онлайн формате, для корректирования нововведений и `,
      positions: [
        {
          code: 'fullstack',
          title: 'Fullstack Developer'
        }
      ]
    },
    def: {
      start: '04.03.2024',
      end: false,
      logo: '/def.svg',
      name: '',
      properties: {
        peoples: 9,
        hours: 10,
        mode: 'Full-remote',
        modeIcon: '/remote.svg',
        location: 'USA',
        site: 'https://def.wtf'
      },
      description: `I’m working on a startup project for an English language learning app. I hold the position of a full-fledged Backend Developer, but due to my personal qualities, I take on some Flutter tasks as well. We use the Nest.js framework along with gRPC for writing the backend part and its corresponding microservices. I’ve been deeply involved in integrating customer.io into the app, which quickly boosted engagement and retention. I’ve conducted Prisma migrations on a serverless architecture based on CockroachDB under the aegis of PostgreSQL. During horizontal scaling moments, I handle orchestration through K8s and Docker. I’ve set up a CDN using Redis and sharding through regional servers. I’ve actively participated in the implementation of P2P livekit websocket video calls.`,
      positions: [
        {
          code: 'backend',
          title: 'Backend Developer'
        },
        {
          code: 'devops',
          title: 'Development & Operations'
        }
      ]
    }
  }
  const x = map[type]
  const getDescriptionWithClasses = (description) => {
    const keywords = ['nest', 'node', 'react', 'next', 'postgresql', 'k8s', 'flutter', 'docker', 'docker', 'cockroachdb', 'prisma', 'mongodb', 'redis'];
    return description.split(' ').map((word, index) => {
      const reword = word.split('.')[0].toLowerCase();
      if (
        keywords.includes(reword)
        || keywords.includes(reword+'js')
        || keywords.includes(reword+'.js')
        ) {
        return <span key={index} className={s[reword]}><img src={`/${reword}.png`} alt=''/>{word}</span>;
      } else {
        return word + ' ';
      }
    });
  };
  return (
    <div className={`${s.work} ${s[type]}`}>
      <start>{x.start}</start>
      <div className={s.heading}>
        <div className={s.top}>
          <img src={x.logo} alt=''/>
          {x.name && (<h3>{x.name}</h3>)}
          {x.positions.map(exp => (
            <div key={exp.code} className={`${s.role} ${s[exp.code]}`}>
              {exp.title}
              <img src={`/${exp.code}.svg`} alt=''/>
            </div>
          ))}
        </div>
        <div className={s.bottom}>
          <div className={s.exp}>
            <img src='/users.svg' alt=''/>
            <p>{x.properties.peoples} peoples</p>
          </div>
          <div className={s.exp}>
            <img src='/time.svg' alt=''/>
            <p>{x.properties.hours} hrs/w</p>
          </div>
          <div className={s.exp}>
            <img src={x.properties.modeIcon} alt=''/>
            <p>{x.properties.mode}</p>
          </div>
          <div className={s.exp}>
            <img src='/point.svg' alt=''/>
            <p>{x.properties.location}</p>
          </div>
          <div className={s.exp}>
            <img src='/globe.svg' alt=''/>
            <a href={x.properties.site}>{x.properties.site.substring(8)}</a>
          </div>
        </div>
      </div>
      <div className={s.description}>
        {getDescriptionWithClasses(x.description)}
      </div>
      {children}
      <hr align='vertical' />
      <end>{x.end || 'Now'}</end>
    </div>
  )
}