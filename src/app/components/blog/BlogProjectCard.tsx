"use client";
import ProjectBlog from "@/app/interfaces/ProjectBlog";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

interface ProjectCardProps {
  project: ProjectBlog;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      key={project.id}
      className="bg-gray-800 p-4 rounded-lg text-white shadow-xl hover:shadow-2xl flex flex-col justify-between"
    >
      {/* header part (image) */}
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col h-auto w-full justify-between items-start mt-4">
        {/* title and date at start */}
        <div className="flex flex-col items-start w-3/4 mb-4">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-sm text-gray-400">{project.initialDate}</p>
        </div>

        {/* short description of project */}
        <div className="w-1/2">
          <p className="text-sm text-gray-400">{project.shortDescription}</p>
        </div>

        {/* deploy slowly categories with hover mouse */}
        <div className="flex flex-row w-full justify-between mt-4">
          <div className="flex flex-col items-start relative">
            <div 
                className='text-sm text-gray-400 cursor-pointer'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                Categories
            </div>
            {hovered && 
                <div 
                    className={`absolute left-0 mt-2 bg-white shadow-md border border-gray-200 rounded ${hovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transition: 'opacity 0.3s ease-in-out' }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {project.category.map((category, index) => (
                        <p 
                            key={index} 
                            className={`text-sm text-gray-400 ${hovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
                            style={{ transition: `opacity 0.3s ease-in-out, transform 0.3s ease-in-out ${index * 0.1}s` }}
                        >
                            {category}
                        </p>
                    ))}
                </div>
            }
        </div>

          <div className="flex flex-col items-end">
            <button
              className="text-sm text-gray-400"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              Languages
            </button>
            {showLanguages && (
              <div className="flex flex-col items-end">
                {project.languagesUsed.map((language, index) => (
                  <p key={index} className="text-sm text-gray-400">
                    {language}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* links */}
        <div className="flex flex-row items-end w-12 mt-4 justify-between">
          <a href={project.anotherLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="text-xl text-gray-400 hover:text-white"
            />
          </a>
          <a href={project.linkGithub} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl text-gray-400 hover:text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
