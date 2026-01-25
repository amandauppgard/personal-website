const About = () => {
  return(
    <div className="content-container">
      <div className="about-container">
        <div className="about-container-large">
          <div className="text-box">
            <h2>&gt; About me</h2>
            <p>Hi! I am a computer science student at Åbo Akademi University, aiming to complete my master’s degree in spring 2026. I wrote my bachelor’s thesis on critical security risks in web applications and methods for preventing them, and I will be writing my master’s thesis on accessibility in web applications, with a focus on memory-related conditions such as dementia and MCI. I have experience developing both web and mobile applications through a previous internship as well as personal projects.</p>
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
              <li>DevOps & Docker</li>
              <li>GraphQL</li>
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