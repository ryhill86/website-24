import React from 'react';
import SkillPill from '../components/SkillPill';

const About: React.FC = () => {
  return (
    <div className="flex">
      <div className="text-primary">
        <h2 className="text-3xl md:text-4xl my-8">About me </h2>
        <p className="my-4">
          Hey there! I'm Ryan Hill, a full-stack senior software engineer based
          in Colorado. When I'm not coding, I'm usually hanging out with my
          family, playing with my dog, Penny, or hitting some tennis balls. You
          also might find me baking some homemade sourdough bread 👀.
        </p>
        {/* add image of penny */}
        <p className="my-4">
          Once upon a time, I even was even an (office) ping pong 🏓 champion 🏆
        </p>
        {/* add image of ping pong */}
        <p className="my-2">
          I've been coding for over 9 years and have worked with a wide variety
          of technologies. I'm currently focused on building web applications
          with React, TypeScript, and Node.js.
        </p>
        <h2 className="text-3xl md:text-4xl my-8">Expertise</h2>
        <div className="flex flex-wrap mt-4 bg-secondary text-primary rounded-lg p-6 justify-center">
          <SkillPill dark skill="React" />
          <SkillPill dark skill="Node.js" />
          <SkillPill dark skill="PHP" />
          <SkillPill dark skill="TypeScript" />
          <SkillPill dark skill="CSS / SCSS / TailwindCSS" />
          <SkillPill dark skill="HTML5" />
        </div>
        <h2 className="text-3xl md:text-4xl my-8">Additional Skills</h2>
        <div className="flex flex-wrap mt-4">
          <SkillPill skill="Postgres / Oracle" />
          <SkillPill skill="Docker" />
          <SkillPill skill="SQL" />
          <SkillPill skill="AWS" />
        </div>
      </div>
    </div>
  );
};

export default About;
