const Home = () => {
  return(
    <div className="content-container">
      <div className="text-box">
        <h2>&gt; Welcome to my personal website</h2>
        <p>This website is intended to work as a more interesting version of my resume as well as personal site to keep track of my current projects and ideas. </p>
      </div>
      <div className="text-box">
        <h2>&gt; Latest updates:</h2>
        <ul style={{listStyle: 'none', padding: '0px'}}>
          <li>[01-04-2026] - added pagination to guestbook</li>
          <li>[01-04-2026] - updated website content</li>
          <li>[25-01-2026] - launched the first version of the site!</li>
        </ul>
      </div>
      <div className="text-box">
        <h2>&gt; Todo:</h2>
        <ul>
          <li className="finished">Finish and launch the first version of the site</li>
          <li>Improve the site’s responsiveness across different devices</li>
          <li className="finished">Add pagination to guestbook</li>
          <li>Add a music API</li>
          <li>Add deployment pipeline</li>
        </ul>
      </div>
    </div>
  )
}

export default Home;