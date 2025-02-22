import React from "react";
import { motion } from "framer-motion";
import "./Services.css"; // Import the CSS file

const services = [
  { title: "Digital Marketing", description: "We create data-driven strategies to boost your online presence." },
  { title: "Website Development", description: "We build responsive and user-friendly websites." },
  { title: "SEO", description: "We optimize your website to rank higher on search engines." },
  { title: "UI/UX Design", description: "We design intuitive and engaging user interfaces." },
  { title: "Graphic Design", description: "We create stunning visuals for your brand." },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-accent text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;