import React, { useEffect, useState } from 'react';
import ColoradoFlag from '../assets/ColoradoFlag.svg';
import SceneNoBorder from '../assets/scene-no-border.svg';

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
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row text-primary">
      <div className="w-full self-center align-middle pt-[15vh]">
        <div className="h-full text-left pl-[4vw]">
          <h1 className="font-semibold text-5xl mb-8">Ryan Hill</h1>
          <div className="">
            Senior Software Engineer
            <p>Creating moments of digital delight</p>
          </div>
        </div>
      </div>
      <div className="w-full self-center align-middle text-center pt-[15vh]">
        {/* photo of yours truly */}
        <img src={SceneNoBorder} className="mx-auto" alt="Vite logo" />
        <p className="mt-8">
          {'Based in Colorado | USA  '}
          <img
            className="h-6 inline-block ml-2"
            src={ColoradoFlag}
            alt="Colorado Flag"
          />
        </p>
      </div>
    </div>
  );
};

export default Home;
