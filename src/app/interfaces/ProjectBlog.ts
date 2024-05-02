interface ProjectBlog {
    id: number;
    title: string;
    imageUrl: string;
    shortDescription: string;
    longBody: string;
    linkGithub: string;
    anotherLink: string;
    category: string[];
    languagesUsed: string[];
    currentlyWorking: boolean;
    collaborators: string[];
    initialDate: string;
    finalDate: string;
}

export default ProjectBlog;