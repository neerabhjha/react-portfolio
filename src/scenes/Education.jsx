import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import educationImg from "../assets/education-image.jpg";

const Education = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="education" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">EDUCATION</span>
          </p>
          <LineGradient width="w-1/3" />
          {/* <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quas obcaecati blanditiis doloremque a quidem,
            temporibus adipisci et pariatur est dolor tempore eligendi vero
            perspiciatis amet officia quo recusandae eius?
          </p> */}
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                 before:w-full before:h-full 
                 before:border-2 before:border-blue before:z-[-1]"
            >
              <img src={educationImg} alt="education-img" className="z-10" />
            </div>
          ) : (
            <img src={educationImg} alt="education-img" className="z-10" />
          )}
        </div>
      </div>

      {/* Educations */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Engineering */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                B.Tech in Computer Science and Engineering
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <ul>
              <li>GALGOTIAS UNIVERSITY, Greater Noida, Uttar Pradesh</li>
              <li>2018 - 2022</li>
              <li>6.81 C.G.P.A</li>
            </ul>
          </p>
        </motion.div>

        {/* Intermediate */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Intermediate
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <ul>
              <li>D.A.V PUBLIC SCHOOL, Samastipur, Bihar</li>
              <li>2015 - 2017</li>
              <li>73.40 %</li>
            </ul>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
