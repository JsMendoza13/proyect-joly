import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
/* url de imagenes que se agregan en el slider */
function Slider() {
  const slide = [
    {
      url: "https://images.pexels.com/photos/9928200/pexels-photo-9928200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/5737580/pexels-photo-5737580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/3535380/pexels-photo-3535380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      url: "https://images.pexels.com/photos/12605547/pexels-photo-12605547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  /*  Funcionalidades */
  const [currentIndex, setCurrentIndex] = useState(0);
  /*  Funcionalidad para la flecha, dar antes  */
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  /* Funcionalidad para la flecha Next */
  const nextSlide = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  /* Funcionalidad, click en los botones pequeños que generen una accion */
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  /* Comienzo del div, que en cierra las imagenes y los textos */
  return (
    <div className="max-w-[1200px] h-[780px] w-full m-auto py-36 xl:mt-2 -mt-20 px-4 relative group ">
      <div>
        <h2 className="font-bold xl:text-4xl text-3xl py-4 text-secundary ">
          ¡Simplemente déjate llevar por los deliciosos productos de
          <span className="text-tertiary"> Joly, Guacamole y Hummus</span>! Sin
          conservantes ni ingredientes artificiales.
        </h2>
      </div>
      <div
        style={{ backgroundImage: `url(${slide[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {/* Flecha izquierda */}
        <div className="hidden group-hover:block absolute md:top-[50%] top-[80%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Flecha derecha */}
        <div className="hidden group-hover:block absolute md:top-[50%] top-[80%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2 text-white">
          {slide.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
