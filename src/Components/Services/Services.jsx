import Card from '../Card/Card'
import { useState } from 'react'
import './Services.css'
import emoji1 from '../../img/heartemoji.png'
import emoji2 from '../../img/glasses.png'
import emoji3 from '../../img/humble.png'

import resume from '../../Docs/Resume_Jan2023_Yunus.pdf'
import pikachu2 from '../../img/pikachu2.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'


export default function Intro() {

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
            transform: inView ? 'translateX(-20%)' : 'translateX(-120%)'
        },
        config: { duration: 1000 }
    })

    const props3 = useSpring({
        to: {
            opacity: inView ? 1 : 0.3,
            transform: inView ? 'translateY(0)' : 'translateY(100%)'
        },
        config: { duration: 1000 }
    })

    const theme = useContext(themeContext)

    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            <div className="s-left">
                <div className="s-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                    <span>Services</span>
                    <p style={{ color: darkMode ? 'white' : '' }}>My expertise includes both front-end and back-end development, 
                        <br />
                        allowing me to create seamless user experiences while also ensuring robust 
                        <br/>
                        and scalable functionality.  I am proficient in a wide range of programming
                        <br/>
                         languages and frameworks, including <span style={{fontWeight:'500',fontSize:'16px',color: darkMode ? 'white' : 'black' }}>Java,React JS (javascript),React native </span>
                        <br/>
                        and I always stay up-to-date with the latest trends and best practices in the industry.
                    </p>
                </div>
                <a href={resume} download>
                    <button className="button s-button">
                        Download CV
                    </button>
                </a>

                <animated.img ref={ref} style={{ width: '60%', height: 400, marginLeft: '60%', ...props2 }} src={pikachu2} alt="" />


            </div>
            <div className="s-right">
                <animated.div style={{ left: '50rem', ...props3 }}>
                    <Card
                        image={emoji1}
                        heading={'UI/UX Design'}
                        details={['React JS, ',<br />, 'React Native ']}

                    />
                </animated.div>


                <animated.div style={{ left: '25rem', top: '30%', ...props3 }}>
                    <Card
                        image={emoji2}
                        heading={'Developer'}
                        details={['Java, ', 'HTML, ', <br />, 'CSS, ', 'React JS, ', <br />, 'Bootstrap']}

                    />
                </animated.div>

                <animated.div style={{ left: '50rem', top: '65%', ...props3 }}>
                    <Card
                        image={emoji3}
                        heading={'Android Developer'}
                        details={['React Native  & ',<br/>, 'Redux ']}

                    />
                </animated.div>
            </div>

            <div className="allBlurs">
                <div style={{ top: '0%', left: '10%' }} className="blur"></div>
                <div style={{ top: '15%', left: '-60%', background: '#c1f5ff' }} className="blur"></div>
                <div style={{ top: '10%', left: '0%' }} className="blur"></div>
            </div>
        </div>
    )
}
