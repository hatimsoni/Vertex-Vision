import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", description: "A digital marketing campaign for a leading brand.", image: "https://via.placeholder.com/400" },
  { title: "Project 2", description: "A responsive website for an e-commerce store.", image: "https://via.placeholder.com/400" },
  { title: "Project 3", description: "SEO optimization for a tech startup.", image: "https://via.placeholder.com/400" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-accent text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-2">{project.title}</h3>
              <p className="text-white">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;