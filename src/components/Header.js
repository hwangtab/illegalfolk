import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 fixed w-full z-10">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li><a href="#home" className="hover:text-accent transition duration-300">홈</a></li>
          <li><a href="#performers" className="hover:text-accent transition duration-300">공연자</a></li>
          <li><a href="#tickets" className="hover:text-accent transition duration-300">티켓</a></li>
          <li><a href="#location" className="hover:text-accent transition duration-300">위치</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;