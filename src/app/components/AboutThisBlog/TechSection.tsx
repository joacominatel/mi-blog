"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const technologies = [
  {
    name: "Next.js",
    description: "Usado para renderizar el frontend de la aplicación, en conjunto con express.js para hacer la API y mongoose para la base de datos.",
  },
  {
    name: "Tailwind CSS",
    description: "Usado para diseñar la interfaz de usuario.",
  },
  {
    name: "MongoDB",
    description: "Usado para almacenar datos no relacionales, en este caso los posts del blog y proyectos.",
  },
  {
    name: "PostgreSQL",
    description: "Usado para almacenar los datos relacionales de la aplicación, como los usuarios y comentarios de los posts.",
  },
  {
    name: "Upcoming Tech 1",
    description: "Tecnología que se integrará próximamente.",
  },
  {
    name: "Upcoming Tech 2",
    description: "Otra tecnología que se integrará próximamente.",
  },
];


export default function TechSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    document.title = "Tecnologías Usadas";
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="p-6 bg-blue-950 shadow-lg rounded-lg"
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
            <p>{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
