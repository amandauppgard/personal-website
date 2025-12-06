const Contact = () => {
  return(
    <div className="contact-content">
      <div className='text-box'>
        <h2>&gt; Find me here:</h2>
        <p>Want to reach out about web dev or just to chat? Feel free to message me on these platforms!</p>
        <div className='contact-container'>
          <a href='https://github.com/amandauppgard' target="_blank">
            <div className='contact-info-box'>
              <div className='github-mask'></div>
            </div>
          </a>
          <a href='mailto:amanda.uppgard.dev@gmail.com'>
            <div className='contact-info-box'>
              <div className='mail-mask'></div>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/amanda-uppgård-727325202' target="_blank">
            <div className='contact-info-box'>
              <div className='linkedin-mask'></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;