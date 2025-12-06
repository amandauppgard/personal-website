const About = () => {
  return(
    <div className="content-container">
      <div className="about-container">
        <div className="about-container-large">
          <div className="text-box">
            <h2>&gt; About me</h2>
            <p>Hello! My name is Amanda Uppgård, and I'm currently pursuing my master's degree in computer science at Åbo Akademi University. Lorem ipsum etc etc</p>
          </div>
          <div className="text-box">
            <h2>&gt; Projects:</h2>
            <ul>
              <li>This website</li>
            </ul>
          </div>
          <div className="text-box">
            <h2>&gt; Things I want to learn next</h2>
            <ul>
              <li>DevOps</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
        <div className="about-container-small">
          <div className="text-box">
            <h2>&gt; Skills</h2>
            <ul style={{listStylePosition: 'inside', paddingLeft: '20px'}}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>CSS</li>
              <li>TailWindCSS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="text-box">
            <h2>&gt; Hobbies:</h2>
            <ul style={{listStylePosition: 'inside', paddingLeft: '20px'}}>
              <li>Reading</li>
              <li>Music</li>
              <li>Video games</li>
              <li>Working out</li>
              <li>Crochet</li>
              <li>Coding</li>
            </ul>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About;