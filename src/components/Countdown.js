import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2024-08-14T19:30:00+09:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <section className="py-16 px-4 bg-gradient-countdown">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-danjo">공연까지 남은 시간</h2>
        <div className="bg-gradient-to-br from-pink-100 to-orange-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="flex justify-center space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <span className="text-3xl font-bold text-purple-800">{value}</span>
                <p className="text-sm uppercase text-gray-700">{unit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;