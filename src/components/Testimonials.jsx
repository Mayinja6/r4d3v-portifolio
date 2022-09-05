import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { testimonials } from "../data/About";

const Testimonials = () => {
  return (
    <section className="mb-10 p-3 sm:p-10">
      <div className="mx-auto  px-4 sm:px-5 md:px-8 lg:px-10">
        <div className="text-center pb-[30px]">
          <h2 className="section-title-h2">Testimonials</h2>
          <p className="mb-0">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    <img
                      src={testimonial.img}
                      className="w-[120px] my-0 mx-auto"
                      alt=""
                      style={{ borderRadius: "50%", border: "4px solid #fff" }}
                    />
                    <h3 className="text-[20px] font-bold mx-0 mt-[10px] mb-[5px] text-[#111]">
                      {testimonial.name}
                    </h3>
                    <h4 className="text-[14px] text-[#999]   mx-0 mt-0 mb-[15px]">
                      {testimonial.role}
                    </h4>
                    <p className="lg:w-4/5 italic mx-auto mt-0 mb-[35px]">
                      <i className="fa-solid fa-quote-left text-[#c8efea] relative  inline-block text-[40px]"></i>
                      {testimonial.comment}
                      <i className="fa-solid fa-quote-right relative inline-block text-[#c8efea] text-[40px]"></i>
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <style>{`
      .swiper-pagination .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid #34b7a7;
      }
      
      .swiper-pagination-bullet-active {
        background-color: #34b7a7 !important;
      }
      `}</style>
    </section>
  );
};

export default Testimonials;
