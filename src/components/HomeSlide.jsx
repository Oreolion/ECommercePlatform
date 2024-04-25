import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
import picture1 from "../assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";
import picture2 from "../assets/images/pexels-bohlemedia-1884581.jpg";
import picture3 from "../assets/images/pexels-rdne-5698852.jpg";
import picture4 from "../assets/images/xianjuan-hu-uPYpcsbICI4-unsplash.jpg";
import picture5 from "../assets/images/matt-liu-FT7J1SONJA8-unsplash.jpg";
import picture6 from "../assets/images/jelleke-vanooteghem-MohB4LCIPyM-unsplash.jpg";
import "animate.css";
import { useRef } from "react";

const HomeSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const slides = [
    {
      picture: picture4,
      title: "pic4",
    },
    {
      picture: picture1,
      title: "pic1",
    },
    {
      picture: picture2,
      title: "pic2",
    },
    {
      picture: picture3,
      title: "pic3",
    },

    {
      picture: picture5,
      title: "pic5",
    },
    {
      picture: picture6,
      title: "pic6",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    // if (newIndex === currentIndex + 1) {
    //    return ref.current.className = 'active'
    //   } else {
    //     ref.current.classList.remove('active');
    //   }
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <section className="homepage__section">
        <div className="img__box">
          <img
            className="animate__animated animate__fadeInRight"
            src={slides[currentIndex].picture}
            ref={ref}
            alt="img1"
          />
        </div>
        <div className="left animate__animated animate__heartBeat animate__infinite">
          <BsChevronCompactLeft
            size={30}
            onClick={prevSlide}
          ></BsChevronCompactLeft>
        </div>
        <div className="right animate__animated animate__heartBeat animate__infinite">
          <BsChevronCompactRight
            size={30}
            onClick={nextSlide}
          ></BsChevronCompactRight>
        </div>
        <div className="choose__slide">
          {slides.map((slide, slideIndex) => (
            <div
              className=" animate__animated animate__bounce"
              key={slideIndex}
              onClick={() => {
                goToSlide(slideIndex);
              }}
            >
              <RxDotFilled size={30} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeSlide;
