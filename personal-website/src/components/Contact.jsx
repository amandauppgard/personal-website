import Github from '@hackernoon/pixel-icon-library/icons/SVG/brands/github.svg';
import At from '@hackernoon/pixel-icon-library/icons/SVG/regular/at.svg';
import Linkedin from '@hackernoon/pixel-icon-library/icons/SVG/brands/linkedin.svg';

const Contact = () => {
  return(
    <div className="content-container">
      <div className='text-box'>
        <h2>&gt; Find me here:</h2>
        <p>Want to reach out about web dev or just to chat? Feel free to message me on these platforms!</p>
        <div className='contact-container'>
          <div className='text-box'>
            <img className='theme-icon' src={Github} alt='Github logo' />
          </div>
          <div className='text-box'>
            <img className='theme-icon' src={At} alt='The symbol at' />

          </div>
          <div className='text-box'>
            <img className='theme-icon' src={Linkedin} alt='Linkedin logo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;