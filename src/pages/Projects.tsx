import React, { useState } from 'react';
import { projects } from '../helpers/projects';
import Modal from '../components/Modal';
import { Project } from '../helpers/ProjectsTypes';

type ActiveProject = Project | null;
type ActiveImage = string | null;

const Projects: React.FC = () => {
  const currentYear: string = new Date().getFullYear().toString();
  const [activeYear, setActiveYear] = useState(currentYear);
  const [activeProject, setActiveProject] = useState<ActiveProject>(null);
  const [activeImage, setActiveImage] = useState<ActiveImage>(null);

  console.log('activeYear', activeYear);
  console.log('active project', projects[activeYear]);

  const handleSetActiveProjectAndImage = (
    project: Project,
    imageName: string,
  ) => {
    setActiveProject(project);
    setActiveImage(imageName);
  };

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

  const activeProjectImage = activeProject?.images.find(
    image => image.name === activeImage,
  );

  return (
    <div className="container text-primary">
      <h2 className="text-3xl md:text-4xl my-8">Projects Timeline</h2>
      <div>{projectYears}</div>
      <div>
        {projects[activeYear].map(project => (
          <div key={project.title} className="my-8">
            <h3 className="text-2xl my-4">{project.title}</h3>
            <p>{project.description}</p>
            <div className="my-4">
              {project.tech.map(techItem => (
                <span
                  key={techItem}
                  className="bg-none text-primary rounded-lg p-2 m-2"
                >
                  {techItem}
                </span>
              ))}
            </div>
            {project?.images?.length > 0 ? (
              <div className="grid grid-cols-3 gap-4 my-8">
                {project.images.map(image => (
                  <button
                    type="button"
                    onClick={() =>
                      handleSetActiveProjectAndImage(project, image.name)
                    }
                  >
                    <img
                      key={image.name}
                      src={image.src}
                      alt={project.title}
                      className=""
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {activeProject && (
        <Modal isOpen={!!activeProject} onClose={() => setActiveProject(null)}>
          <div className="text-slate-800 p-4">
            <h1>Project Gallery</h1>
            <h2>Project: {activeProject.title}</h2>
            <div className="flex flex-col">
              {activeProjectImage && (
                <div className="grow w-full text-center mx-auto my-8">
                  <img
                    className="w-full mx-auto"
                    src={activeProjectImage.src}
                    alt={activeProject.title}
                  />
                  <div>
                    <h3 className="text-inverse">{activeProjectImage.name}</h3>
                    <p className="text-inverse">{activeProjectImage.caption}</p>
                  </div>
                </div>
              )}
              {
                /* display other images in smaller grid below hero image */
                activeProject?.images && (
                  <div className="grow-0">
                    <div className={`grid grid-cols-4 gap-4 px-12 mx-auto`}>
                      {activeProject.images.map(image => {
                        return (
                          <div
                            className={`${
                              image.name === activeImage
                                ? 'border-2 border-primary dark border text-primary dark bg-white dark:bg-slate-800 dark:text-inverse'
                                : ''
                            } p-3 rounded-lg`}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                handleSetActiveProjectAndImage(
                                  activeProject,
                                  image.name,
                                )
                              }
                            >
                              <img
                                key={image.name}
                                src={image.src}
                                alt={activeProject.title}
                                className="w-auto"
                              />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
