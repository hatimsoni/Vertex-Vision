import React from "react";
import { motion } from "framer-motion";
import "./Pricing.css"; // Import the CSS file

const pricingPlans = [
  {
    title: "Digital Marketing",
    plans: [
      { duration: "1 Week", price: "$100" },
      { duration: "1 Month", price: "$300" },
      { duration: "1 Year", price: "$3000" },
    ],
  },
  {
    title: "Website Development",
    plans: [
      { duration: "1 Week", price: "$200" },
      { duration: "1 Month", price: "$600" },
      { duration: "1 Year", price: "$6000" },
    ],
  },
  {
    title: "SEO",
    plans: [
      { duration: "1 Week", price: "$150" },
      { duration: "1 Month", price: "$450" },
      { duration: "1 Year", price: "$4500" },
    ],
  },
  {
    title: "UI/UX Design",
    plans: [
      { duration: "1 Week", price: "$120" },
      { duration: "1 Month", price: "$360" },
      { duration: "1 Year", price: "$3600" },
    ],
  },
  {
    title: "Graphic Design",
    plans: [
      { duration: "1 Week", price: "$80" },
      { duration: "1 Month", price: "$240" },
      { duration: "1 Year", price: "$2400" },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-accent text-center mb-12">Pricing</h2>
        <div className="space-y-8">
          {pricingPlans.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-accent mb-6">{service.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.plans.map((plan, i) => (
                  <div key={i} className="bg-primary p-4 rounded-lg text-center">
                    <h4 className="text-xl font-bold text-accent">{plan.duration}</h4>
                    <p className="text-white mt-2">{plan.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;