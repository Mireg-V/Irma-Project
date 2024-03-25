import s from './Left.module.css'

export function Story() {

  return (
    <div className={`${s.story} ${s.default}`}>
      <h4>About me</h4>
      <hr align='horizontal' />
      <p>Got interested in programming at the age of 15. Always had a knack for technology and always solved emerging problems on my own. I am a cheerful and enthusiastic person. The key to my productivity is maintaining a friendly and comfortable atmosphere in the team. Well-developed ability to solve problems independently. I am a perfectionist by nature and always open to learning new technologies. I will be happy to help if you formulate the question correctly. Ever since I started programming, I’ve created several projects that have helped me improve my skills in various areas of development. I am particularly proud of my contribution to open source, which has allowed me to work with talented developers from around the world. My passion for technology is not limited to coding; I also actively participate in technical communities and events where I can share my knowledge and learn from others. In the future, I aspire to become a leading expert in the field of advanced web development frameworks, continuing to contribute to innovative projects and develop technologies that can change the world for the better.</p>
    </div>
  );
}