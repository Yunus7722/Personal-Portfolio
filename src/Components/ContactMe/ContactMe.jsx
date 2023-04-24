import './ContactMe.css'
import pikachu4 from '../../img/pikachu4.png'
import { themeContext } from '../../Context'
import { useContext, useState } from 'react'

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'


export default function ContactMe() {

  const [emailSent, setEmailSent] = useState(false);


  const [ref, inView] = useInView({ threshold: 0.5 });

  const props = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(-100%)'
    },
    config: { duration: 1000 }
  })

  const props2 = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(100%)'
    },
    config: { duration: 1000 }
  })

  const props3 = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(100%)'
    },
    config: { duration: 1000 }
  })

  const theme = useContext(themeContext)

  const darkMode = theme.state.darkMode;


  //email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rvot7vr', 'template_0u23zes', form.current, '7LslJ2zBV_aohPGyw')
      .then((result) => {
        console.log(result.text);
        setEmailSent(true)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='c-wrapper' id='Contact'>
      <div className="c-left">
        <div className="c-name">
          <span style={{ color: darkMode ? 'white' : '' }} >Get in Touch</span>
          <span>Contact Me</span>
        </div>
        <animated.img ref={ref} style={{ width: '30%', height: 250, marginLeft: '35%', ...props }} src={pikachu4} alt="" />

        <div style={{ top: '-30%', left: '110%', background: '#72efdd' }} className="blur"></div>
        <div style={{ top: '-70%', left: '80%', background: '#75dddd' }} className="blur"></div>
        <div style={{ top: '-40%', left: '10%', background: '#c77dff' }} className="blur"></div>

      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} className="form">

          <input type="text" name='user_name' placeholder='Name' />
          <input type="email" name='user_email' placeholder='E-mail' />
          <textarea cols="10" name='message' placeholder='Message' ></textarea>
          <button type='submit' value='Send' style={{ height: '50px', fontSize: '25px', fontWeight: 'bold' }} className="button">Send Message</button>
          {
            emailSent &&
            <div style={{fontSize:'25px',fontWeight:'600',color:'#9D4EDD',marginTop:'10%',marginLeft:'10%'}}>Thank you for contacting me <br /> I will be in touch with you soon.</div>

          }
        </form>
      </div>

    </div>
  )
}
