import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/services">Serviços</a></li>
        <li><a href="/contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
