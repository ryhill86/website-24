import React from 'react';
import { projects } from '../helpers/projects';

const Projects: React.FC = () => {
  const currentYear: string = new Date().getFullYear().toString();
  const [activeYear, setActiveYear] = React.useState(currentYear);

  console.log('ok', Object.keys(projects));

  const projectYears: Array<React.ReactNode> = Object.keys(projects)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map(year => {
      console.log('yearNumber', year);
      return (
        <button
          key={year}
          onClick={() => setActiveYear(year)}
          className={`bg-none border-none ${
            activeYear === year
              ? 'border-b-2 border-primary text-primary'
              : 'text-secondary hover:text-primary hover:border-primary'
          } rounded-lg p-2 m-2`}
        >
          {year}
        </button>
      );
    });

  return (
    <div className="container text-primary">
      <h2 className="text-3xl md:text-4xl my-8">Projects Timeline</h2>
      <div>{projectYears}</div>
      <div>
        {projects[activeYear].map(project => (
          <div key={project.title} className="my-8">
            <h3 className="text-2xl">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex flex-wrap">
              {project.tech.map(techItem => (
                <span
                  key={techItem}
                  className="bg-none text-primary rounded-lg p-2 m-2"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
