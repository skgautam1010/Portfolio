import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../assets/contact_anime.png';
import github from './../assets/gh.png';
import linkedin from './../assets/li.png';
import instagram from './../assets/in.png';
import twitter from './../assets/twitter.png';
import facebook from './../assets/facebook.png';
import validator from 'validator'
import swal from 'sweetalert';


function message(){
    swal("Thanks For Contacting Me!")
}

const Contact = () => {

    const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Email Validated :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  

    return (
        <div className='section-container'>
            <Header
                headings='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                        onChange={(e) => {validateEmail(e)}}
                    />
                    <span style={{
                            fontWeight: 'bold',
                            color: 'blue',
                        }}>{emailError}</span>

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn' onClick={message}>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/skgautam1010' 
                className='social-icon'
                target="_blank"
                rel="noreferrer"
                >
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://linkedin.com/in/sonukumargautam'
                    className='social-icon'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://www.instagram.com/sonu_skg/'
                    className='social-icon'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt='social' />
                </a>
                <a
                    href='https://twitter.com/imS_K_Gautam'
                    className='social-icon'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt='social' />
                </a>
                <a href='https://www.facebook.com/sonukumar.gautam.10' className='social-icon'
                target="_blank"
                rel="noreferrer"
                >
                    <img src={facebook} alt='social' />
                </a>
            </div>

            <Footer
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;