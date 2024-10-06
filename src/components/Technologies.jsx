import { FaReact, FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMongodb, SiMicrosoftsqlserver, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial = {{ opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <FaNode className="text-7xl text-light-green-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <SiMongodb className="text-7xl text-green-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <RiNextjsFill className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <SiMysql className="text-7xl text-orange-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <TbBrandCSharp className="text-7xl text-purple-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <AiOutlineDotNet className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 0-p4"
        >
          <SiMicrosoftsqlserver className="text-7xl text-red-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
