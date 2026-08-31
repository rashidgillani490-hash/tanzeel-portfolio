import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.span
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-accent text-sm font-medium uppercase tracking-[4px]"
            >
              My Portfolio
            </motion.span>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-2"
            >
              Featured <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[400px] mx-auto lg:mx-0 text-white/50 text-sm leading-relaxed"
            >
              Each project is a testament to my commitment to quality, innovation, and user-centric design.
            </motion.p>

            {/* Premium Stats with Glass Effect */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-3 gap-3"
            >
              <div className="glass-card rounded-xl p-4 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
                <div className="text-3xl font-light text-white group-hover:text-accent transition-colors">5+</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Projects</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
                <div className="text-3xl font-light text-white group-hover:text-accent transition-colors">4</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Tech Stacks</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center group hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-1">
                <div className="text-3xl font-light text-white group-hover:text-accent transition-colors">100%</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;