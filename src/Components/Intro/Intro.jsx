import './Intro.css'
import { useState } from 'react'
import imgDesign from '../../img/abstract2.png'
import imgPic from '../../img/ProfilePIcY.png'
import crown from '../../img/crown.png'
import thumbUp from '../../img/thumbup.png'
import glasses from '../../img/Pikachu.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
// import {motion} from 'framer-motion'
// import { animated, useSpring } from '@react-spring/web'

import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'

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

    return (
        <div className="intro" id='Home'>
            <div className="i-left">
                <div className="i-name">
                    <span  style={{color:darkMode?'white':''}} >Hi i am </span>
                    <span>Mohammed Yunus</span>
                    <p>A Fullstack Developer to do the needful who is specialized in building dynamic and responsive web applications that meet the needs of modern businesses and organizations.</p>
                </div>
                <Link spy={true} to='Contact' smooth={true} >
                    <button className="button i-button">
                        Hire Me
                    </button>
                </Link>

                <div className="i-icons">
                <a style={{textDecoration:'none',color:'inherit'}} href="https://github.com/Yunus7722"> <i  class="fa-brands fa-github"></i></a>
                   <a style={{textDecoration:'none',color:'inherit'}} href="https://www.linkedin.com/in/mohammed-yunus-8157a1218/"> <i class="fa-brands fa-linkedin"></i></a>
                   <a style={{textDecoration:'none',color:'inherit'}} href="https://www.linkedin.com/in/mohammed-yunus-8157a1218/"> <i class="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
            <div className="i-right">
                <img style={{ width: '100%', height: 600 }} src={imgDesign} alt="" />
                <img src={imgPic} alt="" />
                {/* <div className="pikaCont"> */}
                    <animated.img className='pikachuImg'
                        style={{ width: '70%', height: 400, top: '20%', left: '-80%', ...props3 }} src={glasses} alt="" />

                {/* </div> */}
                <animated.div
                    className='floating-div'
                    ref={ref}
                    style={{ top: '80%', left: '12%', ...props }}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </animated.div>
                <animated.div
                    className='floating-div'
                    style={{ top: '40%', left: '75%', ...props2 }}>
                    <FloatingDiv image={thumbUp} txt1='Android' txt2='Developer' />
                </animated.div>
                {/* blur divs */}
                <div className="blur"></div>
                <div style={{ background: '#c1f5ff', top: '50%', left: '-25%' }} className="blur"></div>
            </div>
        </div>
    )
}
