import React from 'react';
import Video1 from '../assets/oquvchi-1.mp4';
import Video2 from '../assets/oquvchi-2.mp4';
import Video3 from '../assets/oquvchi-3.mp4';
import Video4 from '../assets/oquvchi-4.mp4';
import Video5 from '../assets/oquvchi-5.mp4';
import Video6 from '../assets/oquvchi-6.mp4';

const Student = () => {
  const videos = [
    { src: Video1, name: 'Muhammadislom', course: '"Front end" kursi bitiruvchisi' },
    { src: Video2, name: 'Haydarov Asilbek', course: '"Front end" kursi bitiruvchisi' },
    { src: Video3, name: 'Abdullayev Farruh', course: '"Backend" kursi bitiruvchisi' },
    { src: Video4, name: 'Samandar', course: '"Front end" kursi bitiruvchisi' },
    { src: Video5, name: 'Lazizbek', course: '"Front end" kursi bitiruvchisi' },
    { src: Video6, name: 'Jafarbek', course: '"Python Backend" kursi oquvchisi' }
  ];

  return (
    <div className="w-[1250px] mx-auto">
      <h2 className="text-[40px] noto text-center py-[50px]">O'quvchilarimiz fikrlari</h2>
      <div className="flex flex-wrap gap-[50px]">
        {videos.map((video, index) => (
          <div key={index} className="w-[383px] h-[604px] flex-col flex">
            <div className="p-[15px] shadow-md shadow-gray-500 rounded-[25px]">
              <video controls className="w-[363px] h-[450px] object-fill rounded-[25px]">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="noto mt-[20px] text-[22px]">{video.name}</h3>
            <p className="text-gray-500 noto mt-[16px]">{video.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
