'use client';
import ProjectBlog from '@/app/interfaces/ProjectBlog';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

interface ProjectCardProps {
    project: ProjectBlog;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [showCategories, setShowCategories] = useState<boolean>(false);
    const [showLanguages, setShowLanguages] = useState<boolean>(false);

    return (
        <div key={project.id} className="bg-gray-800 p-4 rounded-lg text-white shadow-xl hover:shadow-2xl">
            <Image src={project.imageUrl} alt={project.title} width={300} height={200} className="rounded" />
            <h2 className="text-2xl font-bold mt-2">{project.title}</h2>
            <p className="mt-1">{project.shortDescription}</p>
            <div className="flex space-x-4 my-2">
                <a href={project.linkGithub} target="_blank" rel="noreferrer" className="flex items-center text-blue-400">
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    Github
                </a>
                <a href={project.anotherLink} target="_blank" rel="noreferrer" className="flex items-center text-blue-400">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                    Another Link
                </a>
            </div>
            <div className='flex justify-between mt-3'>
                <div onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
                    <button className="bg-gray-700 p-1 rounded">Categories</button>
                    {showCategories && (
                        <ul className="absolute bg-gray-700 p-1 rounded mt-2 gap-2">
                            {project.category.map((category) => (
                                <li key={category} className='p-1 rounded'>{category}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div onMouseEnter={() => setShowLanguages(true)} onMouseLeave={() => setShowLanguages(false)}>
                    <button className="bg-gray-700 p-1 rounded">Languages</button>
                    {showLanguages && (
                        <ul className="absolute bg-gray-700 p-1 rounded mt-2 gap-2">
                            {project.languagesUsed.map((language) => (
                                <li key={language} className='p-1 rounded'>{language}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <p className="mt-2">{project.currentlyWorking ? "Currently working" : "Not currently working"}</p>
            <ul className="mt-2">
                {project.collaborators.map((collaborator) => (
                    <li key={collaborator} className="bg-gray-700 p-1 rounded">{collaborator}</li>
                ))}
            </ul>
            <p className="mt-2">{project.initialDate} - {project.finalDate}</p>
        </div>
    );
};

export default ProjectCard;