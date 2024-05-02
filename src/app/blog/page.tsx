"use client";
import ProjectBlog from "../interfaces/ProjectBlog";
import { useState, useEffect } from "react"
import axios from "axios";
import CreateBlog from "../components/blog/CreateBlog";

import BlogProjectCard from "../components/blog/BlogProjectCard";

export default function Blog() {
    const [projects, setProjects] = useState<ProjectBlog[]>([]);
    const [showCreateBlog, setShowCreateBlog] = useState<boolean>(false);

    useEffect(() => {
        axios.get("http://localhost:3000/api/projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    function handleCreateBlog() {
        setShowCreateBlog(!showCreateBlog);
    }

    // on click out of the create blog form, close the form
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (showCreateBlog) {
                if (event.target.id === "create-blog") {
                    setShowCreateBlog(false);
                }
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [showCreateBlog]);

    return (
        <div className="h-screen bg-code-bg bg-cover bg-center font-mono">
            <div className="container mx-auto">
                <h1 className="text-4xl text-white text-center py-8">Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <BlogProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-8">
                {/* create new blog */}
                <button
                    onClick={handleCreateBlog}
                    className="bg-code-bg-light text-white p-2 rounded-md"
                >
                    Create Blog
                </button>

                {showCreateBlog && <CreateBlog />}
            </div>
        </div>
    );
}