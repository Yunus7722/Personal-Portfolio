import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import img1 from '../../img/Business.png'
import img2 from '../../img/ECommerce.png'
import img3 from '../../img/Blog.png'
import img4 from '../../img/responsiveFinal.png'
import img5 from '../../img/Business2.png'
import {themeContext} from '../../Context'
import {useContext} from 'react'
 
export default function Portfolio() {
  const theme = useContext(themeContext)

  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      <span  style={{color:darkMode?'white':''}} >Recent Projects</span>
      <span>Portfolio</span>
        <Swiper
        
        spaceBetween={-200}
        slidesPerView={2}
        grabCursor={true}
        className='portfolio-slider'
        >
          
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img style={{height:'67%'}} src={img4} alt="" />
            </SwiperSlide>
            
        </Swiper>

         {/* Media query for 450px */}
     
    </div>
  )
}
