'use client'; 
import ProjectCardComponent from "./extras/ProjectCard";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useState } from "react";
import ProjectCard from "../interfaces/ProjectCard";

export default function AboutSection() {
  const [featuredProjects, setFeaturedProjects] = useState([] as ProjectCard[]);
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        setFeaturedProjects(res.data);
        console.log(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  })

  return (
    <section
      className="flex justify-center items-center h-screen bg-gray-800 text-white relative"
      id="about"
    >
      <div className="flex flex-row justify-between items-center w-full max-w-screen-2xl p-8 md:p-16 gap-20">
        <div className="w-1/2 py-8 px-4 bg-code-bg rounded-b-2xl shadow-lg relative">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-800 rounded-t-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
          <h2 className="text-2xl font-bold mb-3">Sobre mi</h2>
          <p className="text-base">
            Soy un desarrollador backend. Desde chico me interese por la
            tecnología y la programacion. Empece desarrollando paginas web
            estaticas. Luego me interese por el analisis de datos y aprendi a
            usar Python y SQL. Actualmente, paso mi tiempo desarrollando APIs,
            aplicaciones web, y scripts de automatización. 🖥️
          </p>
          <div className="top-0 left-0 w-full h-0.5 bg-gray-800 rounded-t-lg bg-gradient-to-r from-gray-300 via-blue-950 to-gray-700 my-3"></div>
          <p>
            Siempre estoy buscando aprender cosas nuevas y mejorar mis
            habilidades, trato de destacar en cada proyecto que hago. Algunos de
            los lenguajes que mas utilizo son{" "}
            <strong>Python, JavaScript, TypeScript, y SQL. </strong>🐍
            Actualmente oriento mis practicas al desarrollo blockchain y a la
            ciberseguridad. 🛡️
          </p>
          <div className="top-0 left-0 w-full h-0.5 bg-gray-800 rounded-t-lg bg-gradient-to-r from-gray-300 via-blue-950 to-gray-700 my-3"></div>
          <p>
            Me gusta entender el funcionamiento de los servidores y las DB. Y
            aunque no sea un experto desarrollando el frontend, le pongo esmero
            a la interfaz de usuario de mis aplicaciones 🚀
          </p>
          <div className="top-0 left-0 w-full h-0.5 bg-code-bg-light rounded-t-lg bg-gradient-to-r mt-3" />
          <div className="flex flex-row gap-4 mt-4">
            {/* social media */}
            <a
              href="https://www.linkedin.com/in/joaquin-minatel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github  .com/joacominatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>

        <div className="w-1/2 grid grid-cols-1 gap-6 p-8">
          {featuredProjects.length === 0 && <p>No hay proyectos para mostrar</p> }
          {
            featuredProjects.length > 0 &&
            <h1 className="text-2xl font-bold">Proyectos destacados</h1>
          }
          {featuredProjects.map((project) => (
            <ProjectCardComponent key={project.id} project={project} /> 
          ))}
        </div>
      </div>
    </section>
  );
}
