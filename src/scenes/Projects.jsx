import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import project1Img from "../assets/project-1.jpg";
import project2Img from "../assets/project-2.jpeg";
import project3Img from "../assets/project-3.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVarient = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, overview, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVarient} className="relative">
      <div className={overlayStyles}>
        <p className="text-3xl font-playfair text-yellow">{title}</p>
        <p className="mt-7 text-yellow text-xl">{overview}</p>
      </div>
      <img src={image} alt={projectTitle} className="h-[300px]" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-10">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        {/* <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p> */}
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center mt-10">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project
            image={project1Img}
            title="Project 1"
            overview="A social media application project built on the MERN stack. 
            The project is in perfect functioning order. The application is entirely responsive."
          />
          <Project
            image={project2Img}
            title="Project 2"
            overview="A Real time chat application project built on the MERN stack and Socket.io. 
            The project is in perfect functioning order."
          />
          <Project
            image={project3Img}
            title="Project 3"
            overview="A static web application that enables users to look up movie details and do movie searches."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
