import ProjectCard from '../../interfaces/ProjectCard';
import Image from 'next/image';

export default function ProjectCardComponent({ project }: { project: ProjectCard }) {
    return (
        <div className="p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer bg-code-bg min-h-32">
            <div className="flex flex-row items-center gap-4">
                <div className="w-1/5 h-1/3">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={100}
                        height={100}
                        objectFit='cover'
                        className="rounded-lg shadow-lg border-2 border-gray-300"
                        />
                </div>
                <div className="w-4/5 flex flex-col">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                    <p className="text-xs text-gray-400 justify-end">{project.date}</p>
                </div>
            </div>
        </div>
    )
}