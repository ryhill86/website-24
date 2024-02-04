import React from 'react';
import RHLogo2 from '../assets/RHLogoNoWords.svg';

const About: React.FC = () => {
  return (
    <div className="flex">
      <div>
        <img src={RHLogo2} className="logo" alt="Vite logo" />
      </div>
      <h1>About me </h1>
      <div className="card">
        Located in Colorado
        <p>Happy to be here</p>
      </div>
    </div>
  );
};

export default About;
