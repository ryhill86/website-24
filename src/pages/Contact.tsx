import React from 'react';
import Github from '../assets/github-mark-white.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Gmail from '../assets/Gmail.svg';
import { githubUrl } from '../helpers/constants';

const Contact: React.FC = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold text-primary my-12">Contact Me</h2>
      <p className="text-primary mb-8">
        I would love to hear from you! You can find me in the following places:
      </p>
      {/* add a row of linked svg icons for linkedin, github, email */}
      <div className="flex flex-start">
        <a
          href="https://www.linkedin.com/in/iamryanhill/"
          target="_blank"
          rel="noreferrer"
          className="mr-6"
        >
          <img className="h-12" src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer" className="mr-6">
          <img className="h-12" src={Github} alt="GitHub" />
        </a>
        <a
          href="mailto:ryan.hill09@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="mr-6"
        >
          <img className="h-12" src={Gmail} alt="Gmail" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
