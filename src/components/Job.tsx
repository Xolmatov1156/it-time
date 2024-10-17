import Soha1 from "../assets/soha-1.png";
import Soha2 from "../assets/soha-2.jpg";
import Soha3 from "../assets/soha-3.png";
import Soha4 from "../assets/soha-4.png";
import Soha5 from "../assets/soha-5.png";
import Soha6 from "../assets/soha-6.png";
import Soha7 from "../assets/soha-7.png";
import Soha8 from "../assets/soha-8.png";
import Soha9 from "../assets/soha-9.png";
import Soha10 from "../assets/soha-10.png";
import Soha11 from "../assets/soha-11.png";
import { FaStar } from "react-icons/fa6";
import Watch from "../assets/watch.svg";


const jobsData = [
  {
    title: "Mobilografiya",
    price: "4 300 000 sumdan",
    duration: "2 oy",
    img: Soha1,
  },
  {
    title: "IOS",
    price: "13 760 000 sumdan",
    duration: "8 oy",
    img: Soha2,
  },
  {
    title: "Frontend Internship",
    price: "4 837 500 sumdan",
    duration: "3 oy",
    img: Soha3,
  },
  {
    title: "Backed",
    price: "11 180 000 sumdan",
    duration: "8 oy",
    img: Soha4,
  },
  {
    title: "Frontend",
    price: "11 180 000 sumdan",
    duration: "8 oy",
    img: Soha5,
  },
  {
    title: "Marketing SMM",
    price: "4 192 000 sumdan",
    duration: "3 oy",
    img: Soha6,
  },
  {
    title: "Flutter",
    price: "13 975 000 sumdan",
    duration: "10 oy",
    img: Soha7,
  },
  {
    title: "Java Backend",
    price: "11 180 000 sumdan",
    duration: "8 oy",
    img: Soha8,
  },
  {
    title: "Frontend React",
    price: "2 795 000 sumdan",
    duration: "2 oy",
    img: Soha9,
  },
  {
    title: "Grafik Dizayn",
    price: "9 782 500 sumdan",
    duration: "2 oy",
    img: Soha10,
  },
  {
    title: "Frontend JavaScript",
    price: "5 590 000 sumdan",
    duration: "4 oy",
    img: Soha11,
  },
  
];

const Job = () => {
  return (
    <section className="bg-[#F5F6F8] pb-[130px]">
      <div className="w-[1250px] mx-auto">
        <h2 className="text-[40px] noto text-center py-[50px]">
          O'z sohangizni tanlang
        </h2>
        <div className="flex flex-wrap gap-[30px]">
          {jobsData.map((job, index) => (
            <div
              key={index}
              className="flex flex-col p-[15px] shadow-md shadow-[#AB9578] hover:shadow-gray-600 relative bg-white w-[396px] h-[489px] rounded-[25px] cursor-pointer"
            >
              <img src={job.img} alt={job.title} height={233} width={366} />
              <div className="absolute top-[255px] right-[230px] bg-red-700 text-white text-xs font-bold py-1 px-2 rounded-t-md speech-bubble rounded-br-md w-[170px] h-[35px] flex items-center gap-[5px] noto">
                <FaStar />
                MUDDATLI TO'LOV
              </div>
              <h3 className="mt-[60px] text-[26px] noto-norm tracking-wide">
                {job.title}
              </h3>
              <span className="text-[#7E8CA0] noto mt-[20px]">Narxi</span>
              <p className="mt-[5px] text-[18px] noto-norm">{job.price}</p>
              <div className="mt-[25px] flex gap-[8px] items-center">
                <img src={Watch} alt="watch" />
                <span className="text-[#7E8CA0] noto-norm">{job.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Job;
