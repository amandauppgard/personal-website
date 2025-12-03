const Home = () => {
  return(
    <div className="content-container">
      <div className="text-box">
        <h2>&gt; Welcome to my personal website</h2>
        <p>This website is intended to work as a more interesting version of my resume as well as personal site to keep track of my current projects and ideas. </p>
      </div>
      <div className="text-box">
        <h2>&gt; Latest updates:</h2>
        <ul>
          <li>[25-11-2025] - added new feature</li>
          <li>[24-11-2025] began implementing designs</li>
          <li>[21-11-2025] began working on this site</li>
        </ul>
      </div>
      <div className="text-box">
        <h2>&gt; Todo:</h2>
        <ul>
          <li>Finish and launch the first version of the site</li>
          <li>Add a guestbook</li>
          <li>Add a music API </li>
        </ul>
      </div>
    </div>
  )
}

export default Home;