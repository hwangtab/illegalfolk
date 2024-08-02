import React from 'react';

const Location = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=홍대+스페이스+한강";

  return (
    <section id="location" className="py-16 px-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-danjo">용의자 접선장소</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <ul className="list-disc pl-5 text-xl">
              <li className="mb-4">홍대 스페이스 한강 (와우산로 128 B1층)</li>
              <li className="mb-4">용의자들을 만나기 위한 비밀 장소입니다. 조심히 접근하세요!</li>
              <li className="mb-4">총기나 폭약은 반입이 금지되어 있습니다.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <img 
                  src="https://ifh.cc/g/Df9Rxr.jpg" 
                  alt="홍대 스페이스 한강" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-2xl font-bold">지도 보기</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;