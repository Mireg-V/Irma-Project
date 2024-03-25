/* eslint-disable react/style-prop-object */
import s from './Right.module.css'
import { KeyRole } from './KeyRole';

export function Work({type, children}) {
  const map = {
    impactium: {
      start: '02.01.2021',
      end: false,
      logo: 'impactium-dimmed.svg',
      name: 'Impactium',
      properties: {
        peoples: 5,
        hours: 40,
        mode: 'Full-remote',
        modeIcon: 'remote.svg',
        location: 'Ucraine',
        site: 'https://impactium.fun'
      },
      description: `My proprietary venture. Initially conceived as a hub-toolkit for data collection, processing, and analysis for guilds in the MMO-RPG Albion Online. Assembling a team of three developers, we embarked on the project. The first full-fledged project was a data scraper that collected data from official and unofficial sources, and processed them using AI and our own Python algorithms. After working with large alliances in the game for four months, we improved the performance of our systems and the quality of algorithms using Node.js. In total, by the seventh month, we attracted more than three thousand dollars in donations and wrote the client part on Next.js, turning the project into an open-source product, which was completely transferred to another team of developers. It is currently located at the domain https://albionbattles.com/. The next big project was a multiplayer SMP for communication and creativity. Accepting two new developers into the team, we got to work. We used cloud servers on the pterodactyl platform. Implemented websocket for interaction with them. I single-handedly organized a development strategy based using Jira, and delegated the team to optimize and improve workflows using kanban strategy. I was setting up nginx for proxying and pre-processing incoming requests. Implemented cloud servers via SFTP for storing user media files and FTP for their reuse in CDN (content delivery network). Did a lot of work with cloudflare setting up dns records and preliminary routing throughout the infrastructure, including the aforementioned CDN. I kept my finger on the pulse, consistently maintaining contact with the community, which allowed me to respond timely and qualitatively to user requests. One of the key decisions I made was to implement voice chat in our virtual environment and our own trading platform for buying and exchanging skins and in-game items. Now the project is in a frozen state due to different views on the vector of product development among developers. In my free time, I am rewriting the project on the Nest.js framework and breaking our monolith into a microservice architecture using RabbitMQ.`,
      positions: ['fullstack', 'community']
    },
    datacode: {
      start: '12.05.2023',
      end: '14.12.2023',
      logo: 'datacode.png',
      name: '',
      properties: {
        peoples: 46,
        hours: 10,
        mode: 'Hybrid',
        modeIcon: 'hybrid.svg',
        location: 'Italy',
        site: 'https://datacode.it'
      },
      description: `I worked at an outsourcing company in a hybrid format, splitting my time between working remotely and from an open-space office. For the first three months, I was an intern, simultaneously accomplishing assigned tasks. Regular code reviews were conducted with the team, where we addressed code issues and discussed architectural decisions. During this period, I participated in the development of four projects.

      I worked with React for the client-side, Node.js on the Express framework for the server-side, and MongoDB and MySQL for data storage. From time to time, I had calls with clients to adjust innovations and implement corrections.
      
      I specialized in writing SEO and e-commerce solutions, but I also practiced and created landing pages for restaurant businesses. I implemented deep integration with 1C and third-party services such as Shopify.`,
      positions: ['fullstack']
    },
    def: {
      start: '04.03.2024',
      end: false,
      logo: 'def.svg',
      name: '',
      properties: {
        peoples: 9,
        hours: 10,
        mode: 'Full-remote',
        modeIcon: 'remote.svg',
        location: 'USA',
        site: 'https://def.wtf'
      },
      description: `I’m working on a project for an English language learning 
      app. I hold the position of a full-fledged Backend Developer, but due to my 
      personal qualities, I take on some Flutter tasks as well. We use the Nest.js 
      framework along with gRPC for writing the backend part and its corresponding 
      microservices. I’ve been deeply involved in integrating customer.io into the 
      app, which quickly boosted engagement and retention. I’ve conducted Prisma 
      migrations on a serverless architecture based on CockroachDB under the aegis 
      of PostgreSQL. During horizontal scaling moments, I handle orchestration 
      through K8s and Docker. I’ve set up a CDN using Redis and sharding through 
      regional servers. I’ve actively participated in the implementation of P2P 
      livekit websocket video calls.`,
      positions: ['backend', 'devops']
    }
  }
  const x = map[type]
  const getDescriptionWithClasses = (description) => {
    const keywords = ['nest', 'node', 'react', 'postgresql', 'next.js', 'k8s', 'flutter', 'docker', 'docker', 'cockroachdb', 'prisma', 'mongodb', 'redis', 'mysql', 'pterodactyl', 'nginx', 'rabbitmq', 'jira'];
    return description.split(' ').map((word, index) => {
      const pun = word.endsWith(',')
        ? ','
        : word.endsWith('.')
          ? '.'
          : ''
      if (word.endsWith(',') || word.endsWith('.')) {
        word = word.slice(0, -1);
      }
      const reword = word.split('.')[0].toLowerCase();
      if (word.startsWith('Rabbit')) {
        console.log({word, reword, pun})
      }
      if (keywords.includes(reword) || keywords.includes(word.toLowerCase())) {
        return <><span key={index} className={s[reword]}><img src={`${reword}.png`} alt=''/>{word}</span>{pun} </>;
      } else if (word.startsWith('https')) {
        return <><a key={index} href={word}>{word.substring(8).slice(0, -1)}</a>{'. '}</>;
      }
      else {
        return word + pun + ' ';
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
          {x.positions.map(e => (
            <KeyRole role={e} />
          ))}
        </div>
        <div className={s.bottom}>
          <div className={s.exp}>
            <img src='users.svg' alt=''/>
            <p>{x.properties.peoples} peoples</p>
          </div>
          <div className={s.exp}>
            <img src='time.svg' alt=''/>
            <p>{x.properties.hours} hrs/w</p>
          </div>
          <div className={s.exp}>
            <img src={x.properties.modeIcon} alt=''/>
            <p>{x.properties.mode}</p>
          </div>
          <div className={s.exp}>
            <img src='point.svg' alt=''/>
            <p>{x.properties.location}</p>
          </div>
          <div className={s.exp}>
            <img src='globe.svg' alt=''/>
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