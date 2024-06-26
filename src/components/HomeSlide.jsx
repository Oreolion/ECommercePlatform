import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { useState, useEffect } from "react";
import picture1 from "../assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";
import picture2 from "../assets/images/pexels-bohlemedia-1884581.jpg";
import picture3 from "../assets/images/pexels-rdne-5698852.jpg";
import picture4 from "../assets/images/xianjuan-hu-uPYpcsbICI4-unsplash.jpg";
import picture5 from "../assets/images/matt-liu-FT7J1SONJA8-unsplash.jpg";
import "animate.css";

const HomeSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
   
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 7000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [slides.length]);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
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
          key={currentIndex}
            className="animate__animated animate__fadeInRight"
            src={slides[currentIndex].picture}
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
        <div className="lowerbox">
            <h1> SHOP QUALITY WEARS, BAGS, SHOES, JEWELRIES AND OTHER ACCESSORIES.</h1>
            <div className="starbox">
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            <FaStar size={25}/>
            </div>
           
        </div>
      </section>
    </>
  );
};

export default HomeSlide;
