import './Footer.css'
import footerImg from '../../img/wave.png'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={footerImg} alt="" />
            <div className="f-content">
                <span>Yunus73.work@gmail.com</span>
                <div className="f-icons">

                    <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://github.com/Yunus7722"> <i class="fa-brands fa-github"></i></a>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.linkedin.com/in/mohammed-yunus-8157a1218/"> <i class="fa-brands fa-linkedin"></i></a>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.linkedin.com/in/mohammed-yunus-8157a1218/"> <i class="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}
