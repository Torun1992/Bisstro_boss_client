import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle
         subHeading={"---From 11:00am to 10:00pm---"}
         heading={ "ORDER ONLINE"}
        >
        </SectionTitle>
        <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={slide1} alt=""></img>
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Salad
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt=""></img>
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt=""></img>
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Dezert
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt=""></img>
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Finny
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt=""></img>
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Phitha
        </h3>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
