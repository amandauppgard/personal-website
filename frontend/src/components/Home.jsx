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
          <li>[25-1-2026] - launched the first version of the site!</li>
          <li>[21-11-2025] - began working on this site</li>
        </ul>
      </div>
      <div className="text-box">
        <h2>&gt; Todo:</h2>
        <ul>
          <li className="finished">Finish and launch the first version of the site</li>
          <li>Improve the site’s responsiveness across different devices</li>
          <li>Clean up the CSS file</li>
          <li>Improve the content on the "about me" page</li>
          <li>Look into better ways to store content</li>
          <li>Improve guestbook validation</li>
          <li>Limit guestbook entries loaded with pages</li>
          <li>Add a music API </li>
        </ul>
      </div>
    </div>
  )
}

export default Home;