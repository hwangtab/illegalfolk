import React from 'react';
import { TICKET_FORM_URL } from '../config';

const Hero = () => {
  const posterUrl = "https://ifh.cc/g/G7Axm6.jpg";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* 포스터 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <img 
          src={posterUrl} 
          alt="불-법 포크연주회 포스터" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* 텍스트 및 버튼 오버레이 */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-danjo mb-4 text-accent" data-aos="fade-down">불-법 포크연주회</h1>
        <p className="text-xl md:text-2xl mb-8" data-aos="fade-up"></p>
        <p className="text-xl md:text-2xl mb-8" data-aos="fade-up">2024년 8월 14일, 오후 7:30</p>
        <p className="text-xl md:text-2xl mb-8" data-aos="fade-up">스페이스 한강</p>
        <a 
          href={TICKET_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300 inline-block transform hover:scale-105 font-jejudoldam" 
          data-aos="zoom-in"
        >
          티켓 예매하기
        </a>
      </div>
    </section>
  );
};

export default Hero;