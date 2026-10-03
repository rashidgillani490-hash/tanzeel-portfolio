import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  FaPhone,
  FaCommentDots,
  FaProjectDiagram,
  FaBullseye,
  FaGlobe,
  FaHeadset,
  FaDatabase,
  FaCalendarCheck,
  FaNetworkWired,
  FaPython,
  FaServer,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

const cardColors = [
  "from-blue-500/20 to-cyan-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-green-500/20 to-emerald-500/20",
];

const services = [
  {
    icon: <FaPhone />,
    title: "AI Voice Receptionist & Calling Agents",
    description: "24/7 custom voice agents for clinics and businesses that handle inbound/outbound calls naturally.",
    color: cardColors[0],
  },
  {
    icon: <FaCommentDots />,
    title: "Advanced AI Chatbot Development",
    description: "Intelligent chatbots for websites and apps that understand context and provide accurate customer responses.",
    color: cardColors[1],
  },
  {
    icon: <FaProjectDiagram />,
    title: "Autonomous AI Workflows",
    description: "Multi-step AI agents designed to automate your business's daily operations and repetitive tasks.",
    color: cardColors[2],
  },
  {
    icon: <FaBullseye />,
    title: "B2B Lead Generation Agents",
    description: "Automated agents that find targeted leads, send emails, and follow up with clients autonomously.",
    color: cardColors[0],
  },
  {
    icon: <FaGlobe />,
    title: "Website AI Integration",
    description: "Seamlessly integrating AI features, smart assistants, and search capabilities into existing web portals.",
    color: cardColors[1],
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support Automation",
    description: "Fully automated AI systems to handle customer complaints, ticketing, and 24/7 helpdesk support.",
    color: cardColors[2],
  },
  {
    icon: <FaDatabase />,
    title: "RAG (Retrieval-Augmented Generation) Systems",
    description: "Custom AI agents trained exclusively on your private company data and internal documents.",
    color: cardColors[0],
  },
  {
    icon: <FaCalendarCheck />,
    title: "AI Appointment Scheduling Bots",
    description: "Calendar-integrated agents that talk to users and directly book, reschedule, or cancel appointments.",
    color: cardColors[1],
  },
  {
    icon: <FaNetworkWired />,
    title: "Multi-Agent Systems",
    description: "Complex setups where multiple specialized AI agents collaborate to complete large-scale projects.",
    color: cardColors[2],
  },
  {
    icon: <FaPython />,
    title: "Custom Python AI Coding",
    description: "Bespoke AI scripting, data processing, and tool creation using advanced Python frameworks.",
    color: cardColors[0],
  },
  {
    icon: <FaServer />,
    title: "CRM & Database AI Integration",
    description: "Connecting intelligent AI agents with your existing CRM software and company databases.",
    color: cardColors[1],
  },
  {
    icon: <FaCode />,
    title: "AI API Development & Backend Logic",
    description: "Creating robust APIs and secure backend architectures for custom AI models.",
    color: cardColors[2],
  },
  {
    icon: <FaRocket />,
    title: "AI SaaS Architecture & Deployment",
    description: "Transforming AI concepts into full-fledged SaaS products and deploying them live.",
    color: cardColors[0],
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