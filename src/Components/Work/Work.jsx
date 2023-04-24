import './Work.css'
import { Link } from 'react-scroll'
import { useState } from 'react'
import img1 from '../../img/kronos.png'
import img2 from '../../img/kronos2.png'
import img3 from '../../img/fiverr.png'
import img4 from '../../img/onus.png'
import img5 from '../../img/Upwork.png'
// import pikachu3 from '../../img/pikachu3.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'
// import { useInView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';



export default function Work() {

    const [ref, inView] = useInView({
        threshold: 0.5, // when the component is 50% visible in the viewport
        // triggerOnce: true, // animate only once when the component is in view
    });



    const [reloadKey, setReloadKey] = useState(0);
    //   const [ref, inView] = useInView();

    const props = useSpring({
        to: {
            opacity: inView ? 1 : 1,
            transform: inView ? 'rotate(0deg) translateX(0%)' : 'rotate(-120deg) translateX(0%)'
        },
        config: { duration: 1500 }
    })


    const props2 = useSpring({
        from: { left: '50%' },
        to: { left: '75%' },
        config: { duration: 3000 },
        reset: false,
        onRest: () => setReloadKey(reloadKey + 1)
    });


    const props3 = useSpring({

        from: { left: '-50%' },
        to: { left: '-85%' },
        config: { duration: 3000 },
        reset: false,
        onRest: () => setReloadKey(reloadKey + 1)
    });

    const theme = useContext(themeContext)

    const darkMode = theme.state.darkMode;
    return (
        <div className='work'>
            <div className="w-left">
                <div className="w-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Worked for All these</span>
                    <span>Brands and Clients</span>
                    <p>Throughout my career, I have worked for several companies as a fullstack developer,  
                        <br />
                        where I was responsible for developing and maintaining web applications 
                        <br />
                        that met the needs of modern businesses and organizations.
                        <br />
                        During my time at each company, I gained valuable experience in a wide range of programming 
                        <br/>
                        languages and frameworks,At each company, I contributed to the development of key projects, 
                        <br/>
                        using my expertise in front-end and back-end development to create seamless user experiences and robust, 

                    </p>
                </div>

                <Link spy={true} to='Contact' smooth={true} >
                    <button className="button w-button">
                        Hire Me
                    </button>
                </Link>


                {/* <img style={{width:'30%',height:250,marginLeft:'70%',marginTop:'-50%'}} src={pikachu3} alt="" /> */}



            </div>
            <div ref={ref} className="w-right">
                <animated.div style={{ ...props }} className="w-main-circle">
                    <div className="w-sec-circle">
                        <img style={{ width: '140px', height: '140px', objectFit: 'contain' }} src={img1} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img style={{ width: '140px', height: '140px', objectFit: 'contain' }} src={img2} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={img3} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img style={{ width: '140px', height: '140px', objectFit: 'contain' }} src={img4} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={img5} alt="" />
                    </div>
                </animated.div>
                <div className="backCircle blueCircle"></div>
                <div className="backCircle yellowCircle"></div>


            </div>
        </div>
    )
}
