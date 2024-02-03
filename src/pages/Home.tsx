import React, { useEffect, useState } from 'react';
import RHLogo2 from '../assets/RHLogoNoWords.svg';

const Home: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      console.log('woohoo');
      setTimeout(() => {
        setStartAnimation(false);
      }, 1000);
    }
  }, [startAnimation]);
  return (
    <div className="container text-white">
      <div>
        <button onClick={() => setStartAnimation(true)}>
          <img src={RHLogo2} className="logo" alt="Vite logo" />
        </button>
      </div>
      <h1>Ryan Hill</h1>
      <div className="card">
        Senior Software Engineer
        <p>Crafting moments of digital delight</p>
      </div>
      <p className="read-the-docs">Based in Colorado | USA</p>
    </div>
  );
};

export default Home;
