import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaCode, FaGraduationCap, FaRobot } from "react-icons/fa";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

const services = [
  {
    icon: <FaCode />,
    title: "Global Web Development & Custom Software",
    description: "Building modern websites, custom software, and full-scale applications from scratch for international clients.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <FaGraduationCap />,
    title: "Agentic AI Master Course",
    description: "Offering an exclusive, comprehensive Master Course in Agentic AI, teaching developers how to build autonomous workflows and AI agents.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <FaRobot />,
    title: "AI Automation Solutions",
    description: "Creating automated systems, AI receptionists, and advanced chatbots to streamline business operations globally.",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-32">
      <Circles />
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-accent text-sm font-medium uppercase tracking-[4px]"
          >
            What I Do
          </motion.span>
          <h2 className="h2 text-accent">My <span className="text-white">Services</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            What I can do for you — transforming ideas into digital reality with modern technologies.
          </p>
        </motion.div>

        {/* ✅ Animated Glassy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`glass-card rounded-xl p-8 text-center group bg-gradient-to-br ${service.color} hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 border border-white/5`}
            >
              {/* ✅ Animated Icon */}
              <motion.div
                className="text-5xl text-accent mb-4 inline-block"
                whileHover={{
                  rotate: [0, -10, 10, -5, 5, 0],
                  scale: 1.2,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* ✅ Animated Border Line */}
              <motion.div
                className="w-0 h-0.5 bg-accent mx-auto mt-4"
                whileHover={{ width: "50%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;