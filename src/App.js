import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import PerformerList from './components/PerformerList';
import TicketInfo from './components/TicketInfo';
import Location from './components/Location';  // 새로 추가
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-neat-loud">
      <Header />
      <Hero />
      <div className="container mx-auto my-16">
        <Countdown />
      </div>
      <PerformerList />
      <TicketInfo />
      <Location />  {/* 새로 추가 */}
      <Footer />
    </div>
  );
}

export default App;