import s from './Skill.module.css'
import nodeImage from '../images/node-js.png'

export function Skill({ type }) {
  const skillMap = {
    node: {
      image: nodeImage,
      title: "Node.js"
    },
    react: {
      image: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
      title: "React.js",
      accent: '#222222',
      color: '#00D8FF'
    },
    javascript: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
      title: "JavaScript",
      accent: '#F0DC4E',
      color: '#2E302C'
    },
    typescript: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
      title: "TypeScript",
      accent: '#2D79C7',
      color: '#2E302C'
    },
    next: {
      image: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      title: "Next.js",
      accent: '#0d0d0d',
      color: '#fff'
    },
    docker: {
      image: 'https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png',
      title: "Docker",
      accent: '#fff',
      color: '#0F95D5'
    },
  };
  const skill = skillMap[type] || skillMap['node'];

  return (
    <div style={{background: skill.accent }} className={`${s.skill} ${s[type]}`}>
      <img src={skill.image} height={undefined} width={undefined} alt='' />
      {skill?.title && <p style={{color: skill.color }}>{skill.title}</p>}
    </div>
  );
}