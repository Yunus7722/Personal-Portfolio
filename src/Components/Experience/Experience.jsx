import './Experience.css'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer';


export default function Experience() {

    
  const [ref, inView] = useInView({ threshold: 0.5 });
  
  const props = useSpring({
    to: {
      opacity: inView ? 1 : 0.3,
      transform: inView ? 'translateY(0)' : 'translateY(100%)'
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
        <div className='experience' id='Experience'>
            <animated.div style={props}   ref={ref}  className="achievement" >
                <div style={{color:darkMode?'black':''}} className="circle">1+</div>
                <span style={{color:darkMode?'white':''}}>years</span>
                <span>experience</span>

            </animated.div>
            <animated.div style={props}  ref={ref}  className="achievement">
                <div style={{color:darkMode?'black':''}} className="circle">5+</div>
                <span style={{color:darkMode?'white':''}}>completed</span>
                <span>Projects</span>


            </animated.div>
            <animated.div style={props}   ref={ref}  className="achievement">
                <div style={{color:darkMode?'black':''}} className="circle">2</div>
                <span style={{color:darkMode?'white':''}}>companies</span>
                <span>work</span>

            </animated.div>
        </div>
    )
}
