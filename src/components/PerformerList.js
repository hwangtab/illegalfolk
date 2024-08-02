import React from 'react';

// 이미지를 직접 import 합니다.
import operaDangguClub from '../images/opera-danggu-club.jpg';
import moreudoToyoil from '../images/moreudo-toyoil.jpg';
import kwakJuna from '../images/kwak-juna.jpg';
import leeHyeongju from '../images/lee-hyeongju.jpg';
import kimDongsanAndBlueNeighbors from '../images/kim-dongsan-and-blue-neighbors.jpg';

const performers = [
  { 
    name: "오페라 당구클럽", 
    time: "19:30-19:50", 
    description: "7인조 음악 갱단. 즉흥적으로 당신의 귀를 납치합니다. 멜로디가 당신의 뇌를 당구공마냥 이리저리 굴릴 수 있음.", 
    image: operaDangguClub
  },
  { 
    name: "모레도토요일", 
    time: "19:50-20:10", 
    description: "모레도 노래하고 토요일도 노래하는 듀오. 오늘은 수요일인데 왜 왔지? 귀를 쫑긋 세워보세요. 평화의 멜로디가 들려올 거예요. 강정마을에서 몰래 자란 평화의 씨앗 두 알. 오늘 밤 특별히 타악기를 치는 공범과 함께 등장! ", 
    image: moreudoToyoil
  },
  { 
    name: "곽주나", 
    time: "20:10-20:30", 
    description: "그녀의 목소리에 숨겨진 마법을 느껴보세요. 공간을 가득 채우는 목소리로 당신의 마음을 훔치는 솜씨를 가진 여성 뮤지션. 목소리가 달콤해서 당뇨를 유발합니다. ", 
    image: kwakJuna
  },
  { 
    name: "이형주", 
    time: "20:30-20:50", 
    description: "포크, 블루스, 재즈를 한 냄비에 넣고 끓인 수상한 음악을 제조 중. 장르의 경계를 불법적으로 넘나드는 블루스 밀수업자. 당신의 귀를 현혹시킬 예정..!", 
    image: leeHyeongju
  },
  { 
    name: "김동산과 블루이웃", 
    time: "20:50-21:10", 
    description: "현대판 음유시인, 김동산이 들려주는 우리 이웃들의 이야기. 이웃들의 이야기를 몰래 훔쳐 노래로 만드는 수상한 남자와 그의 푸르딩딩한 공범들..! 가슴 뭉클한 노래들로 공연의 피날레를 장식합니다.", 
    image: kimDongsanAndBlueNeighbors
  },
];

const PerformerCard = ({ performer }) => (
    <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg shadow-md overflow-hidden p-6 flex items-center">
    <div className="w-24 h-24 flex-shrink-0 mr-6">
        
      <div className="w-full h-full rounded-full border-2 border-gray-300 overflow-hidden">
        <img 
          src={performer.image} 
          alt={performer.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
    <div>
    <h3 className="text-3xl font-semibold mb-2 font-gooltokki">{performer.name}</h3>
      <p className="text-accent text-2xl font-bold mb-2">{performer.time}</p>
      <p className="text-gray-600 text-xl mb-4">{performer.description}</p>
    </div>
  </div>
);

const PerformerList = () => {
  return (
    <section id="performers" className="py-16 px-4 bg-gradient-performers">
      <div className="container mx-auto">
      <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-danjo text-center mb-12 px-2 sm:px-4">
  <span className="block">오늘 밤 체포될(?)</span>
  <span className="block">용의자들</span>
</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {performers.map((performer, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <PerformerCard performer={performer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformerList;