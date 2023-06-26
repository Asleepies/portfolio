export default function About() {

  return (
    <div className="page">
      <h2 style={{margin:'.25em'}}>About Me</h2>
      <div>
        <a href='https://github.com/Asleepies' className='projLink' style={{margin:'.25em'}}>
                Git Hub</a>
        <a href='https://leetcode.com/Asleepies/' className='projLink' style={{margin:'.25em'}}>
                LeetCode</a>
      </div>
      <div id="bio">I'm a self taught engineer with a passion for problem solving. I was first drawn to coding and software development in 2011 while working in an industry plagued by obsolete software, and have been a hobby coder ever since. In 2020 I decided to make a career change and have built several personal projects since to expand my knowledge and abilities. I'm always looking for new ways to improve and interesting projects to take on.</div>
      <div className="aboutPage">
        <h3>Languages & Frameworks</h3>
        <ul>
            <li>Javascript</li>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Sequelize</li>
            <li>Phaser</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Ruby</li>
        </ul>
  
        <h3>Databases</h3>
        <ul>
            <li>PostgreSQL</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>Redis</li>
            <li>MongoDB</li>
        </ul>
  
        <h3>Management & Deployment</h3>
        <ul>
            <li>GIT</li>
            <li>CLI</li>
            <li>Heroku</li>
            <li>FTP</li>
        </ul>
      </div>
    </div>
  )
}