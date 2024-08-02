import React from 'react';
import { TICKET_FORM_URL } from '../config';

const TicketInfo = () => {
  return (
    <section id="tickets" className="py-16 px-4 bg-gradient-tickets">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 font-danjo">체포영장 (티켓 정보)</h2>
      <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <p className="text-2xl font-bold mb-4">가격: 단돈 20,000원..!</p>
        <ul className="text-left text-xl list-disc pl-5 mb-6">
          <li className="mb-2">아래 예매하기 버튼을 누르고 뇌물을 바치세요.</li>
          <li className="mb-2">너무 떠들면 체포당합니다!</li>
          <li className="mb-2">티켓 없어도 몰래 들어올 방법을 알아서 찾으세요. (찾은 척만 하세요)</li>
        </ul>
        <a 
          href={TICKET_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300 inline-block transform hover:scale-105 font-jejudoldam"
        >
          티켓 예매하기
        </a>
      </div>
    </div>
  </section>
);
};


export default TicketInfo;