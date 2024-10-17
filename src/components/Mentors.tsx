import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Mentor1 from "../assets/mentor-1.png";
import Mentor2 from "../assets/mentor-2.jpg";
import Mentor3 from "../assets/mentor-3.jpg";
import Mentor4 from "../assets/mentor-4.jpg";
import Mentor5 from "../assets/mentor-5.jpg";

interface Mentor {
  name: string;
  title: string;
  description: string;
  image: string;
}

const mentorsData: Mentor[] = [
  { 
    name: 'Raximjanov Islombek', 
    title: 'Mentor: Frontend dasturchi', 
    image: `${Mentor1}`,
    description: "Tajribasi—1,5 yil, Til bo'yicha daraja—rus tili B1, Qo'shimcha ma'lumotlar—talaba(TATU 4-kurs) "
  },
  { 
    name: 'Komiljonova Mohlaroyim', 
    title: 'Mentor: Arab tili', 
    image: `${Mentor2}` ,
    description: "Tajribasi—2 yil, Til bo’yicha daraja–Arab tili B2, Qo’shimcha ma’lumotlar (Islom institutida talaba)"
  },
  { 
    name: 'G\'ofurova Gulbahor', 
    title: 'Mentor: Grafik dizayn', 
    image: `${Mentor3}` ,
    description: "Tajribasi—4 yil, Til bo'yicha daraja—B1(rus tili), Qo'shimcha ma'lumot—talaba(Moliya 3-kurs) "
  },
  { 
    name: 'Абдусаттарова Маржонабону ', 
    title: 'Mentor: Grafik dizayn', 
    image: `${Mentor4}` ,
    description: "Tajribasi–1,5 yil, Til bilish darajasi-– rus tili B2,ingiz tili B2, O’quvchilari soni – 500 +"
  },
  { 
    name: 'Xamroyeva Azizabonu', 
    title: 'Mentor: Adminstrator', 
    image: `${Mentor5}` ,
    description: "Tajribasi—1yil, Qo'shimcha ma'lumot— shartnoma ishlari bo'yicha ma'lumoti bor, talaba "
  },
];

const Mentors = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="w-[1250px] mx-auto">
      <h2 className="text-[45px] text-[#000929B3] noto mb-[30px]">Bizning mentorlarimiz</h2>
      <Slider ref={sliderRef} {...settings}>
        {mentorsData.map((mentor, index) => (
          <div key={index} className="p-4">
            <div className="w-[392px] h-[215px] border-[1.5px] rounded-lg border-red-600 p-[20px]">
            <div className="bg-white flex gap-[20px] items-center h-[100px]">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <div className="flex flex-col gap-[11px]">
              <h3 className="text-xl font-semibold text-[25px] noto-norm">{mentor.name}</h3>
              <p className="text-gray-500 text-[17px] noto-norm ">{mentor.title}</p>
              </div>
            </div>
              <p className="noto-norm text-[14px] mt-[18px]">{mentor.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-[200px] flex justify-between h-[50px] mt-[30px] mx-auto">
        <button className="text-red-700 text-[30px] border-[2px] border-red-700 rounded-full w-[40px] flex justify-center items-center h-[40px]" onClick={goPrev}><GoArrowLeft /></button>
        <button className="text-red-700 text-[30px] border-[2px] border-red-700 rounded-full w-[40px] flex justify-center items-center h-[40px]" onClick={goNext}><GoArrowRight /></button>
      </div>
    </section>
  );
};

export default Mentors;
