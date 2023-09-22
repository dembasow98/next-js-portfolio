import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/a1.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            I had the privilege of working alongside Demba Sow at Carcheckup for the past two months, where we collaborated on various projects using Django. 
             {`Demba's`} expertise and dedication to the work were truly impressive. 
            His problem-solving skills and commitment to delivering high-quality code greatly contributed to the success of our projects. 
            {`I'ts`} been a pleasure working with Demba, and I look forward to more collaborations in the future.
            </p>
            <h6>Serkan Geçici</h6>
            <span>CEO at Milena Software & CarCheckUp UK</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/a1.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            Demba Sow played a pivotal role in the development and maintenance of our property website and admin panel. 
            His technical prowess and attention to detail ensured that our online platform was not only functional but also user-friendly. 
            {`Demba's`} ability to grasp complex requirements and turn them into efficient solutions is commendable. 
            I highly recommend him for any web development projects and look forward to our continued partnership.
            </p>
            <h6>Mohamed Teyyib</h6>
            <span>CEO at MasterClass Property Turkiye</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/a1.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            I had the privilege of supervising Demba Sow during his final year project at SAU, where we collaborated on the development of the Ohara Bookshelf. 
            {`Demba's`} contribution to this project, particularly in implementing machine learning algorithms, was outstanding. His dedication, analytical skills, and creativity were evident throughout the project.
            It was a pleasure to work with such a talented and motivated student, and I have no doubt that Demba has a promising future in the field of machine learning.
            </p>
            <h6>Mustafa Keskin</h6>
            <span>SAU Ph.D. Professor</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/a1.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            Demba Sow made a significant impact during his time at Just English Sakarya as an English teacher. His teaching style and dedication to 
            student success were truly appreciated by both our clients and the students themselves. {`Demba's`} presence in the classroom created 
            a positive and engaging learning environment, and {`it's`} no surprise that our students loved having him as their teacher. His efforts helped enhance client satisfaction, 
            and I would gladly welcome him back anytime to continue making a difference in our {`students'`} lives.
            </p>
            <h6>Kerem Duman</h6>
            <span>CEO at Just English Sakarya</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
