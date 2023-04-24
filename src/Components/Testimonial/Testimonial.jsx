import './Testimonial.css'
// import  from '../../img/profile1.jpg'
import profile2 from '../../img/onus.png'
import profile3 from '../../img/onus.png'
import profile4 from '../../img/kronos.png'
import profile1 from '../../img/kronos2.png'

// import profile5 from '../../img/profile5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination ,Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Testimonial() {

    const clients = [
        {
            img: profile1,
            review: '"We had the pleasure of working with Md Yunus on the CWFM project, where they were responsible for backend development in Java. Md Yunus was an integral member of our team, bringing a high level of technical expertise and innovative problem-solving to the project.'
        },
        {
            img: profile2,
            review: 'Their contributions were instrumental in ensuring the success of the project, and their commitment to delivering high-quality results was evident in all aspects of their work. They were able to work collaboratively with cross-functional teams, communicate effectively, and deliver their work on time and within budget.'
        },
       
        {
            img: profile4,
            review: 'We had the pleasure of working with Md yunus at UKG, where they served as a fullstack developer. Md yunus brought a wealth of technical knowledge and expertise to the role, and consistently delivered high-quality work on complex projects.'
        },
    ]

    return (
        <div className='t-wrapper' id='Testimonials'>
            <div className="t-heading">
                <span>Clients Always get</span>
                <span> Exceptional Work </span>
                <span> from me</span>
            </div>
           
            <Swiper
            navigation={{clickable:true}}
            modules={[Pagination,Navigation]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div style={{top:'-30%',left:'-20%',background:'#c1f5ff'}} className="blur"></div>
            <div style={{top:'-60%',left:'10%',}} className="blur"></div>
            <div style={{top:'-50%',left:'10%',}} className="blur"></div>
        </div>
    )
}
