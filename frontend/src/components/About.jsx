const About = () => {
  return(
    <div className="content-container">
      <div className="about-container">
        <div className="about-container-large">
          <div className="text-box">
            <h2>&gt; About me</h2>
            <p>Hi! I am a computer science student at Åbo Akademi University, aiming to complete my master’s degree in spring 2026.</p>
            <p>I wrote my bachelor’s thesis on critical security risks in web applications and methods for preventing them, and I will be writing my master’s thesis on accessibility in web applications, with a focus on memory-related conditions such as dementia and MCI. </p>
            <p>I have experience developing both web and mobile applications through a previous internship as well as personal projects.</p>
          </div>
          <div className="text-box">
            <h2>&gt; Projects:</h2>
            <ul>
              <li><a href="https://github.com/amandauppgard/personal-website">Personal website</a> - This website! A full-stack project built with React, Express, and MongoDB.</li>
              <li><a href="https://github.com/project-pode/Pode">Pode</a> - A mobile application for learning Python, built with TypeScript using React Native for the frontend and Express for the backend. (Group project) </li>
            </ul>
          </div>
          <div className="text-box">
            <h2>&gt; Things I want to learn next</h2>
            <ul>
              <li>Docker</li>
              <li>kubernetes</li>
              <li>Jenkins</li>
              <li>.NET</li>
              <li>Go</li>
            </ul>
          </div>
        </div>
        <div className="about-container-small">
          <div className="text-box">
            <h2>&gt; Skills</h2>
            <ul style={{listStylePosition: 'inside', paddingLeft: '20px'}}>
              <li>Programming languages</li>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
              </ul>
              <li>Frameworks & Libraries</li>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
              <li>Databases & Cloud</li>
              <ul>
                <li>MongoDB</li>
                <li>AWS (EC2 & S3)</li>
                <li>PostgreSQL</li>
              </ul>
              <li>Tools & Systems</li>
              <ul>
                <li>Git</li>
                <li>Linux</li>
                <li>Jira</li>
                <li>Github actions (CI/CD)</li>
              </ul>
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
              <li>Ceramics</li>
            </ul>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About;