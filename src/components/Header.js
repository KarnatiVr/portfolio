import React from "react";
import man from "../man.png";
import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const text = "I am Venkat"; // This would normally be passed into this component as a prop!
  const text2 = "Full-Stack Developer";
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className="header d-flex flex-col">
      <div className="header--content">
        {/* <p
        >I am Venkat</p>
        <p className='role'><span className='role--highlight'>Full-Stack</span> Developer</p> */}
        <motion.h3 aria-label={text} role="heading">
          {text.split(" ").map((word, index) => {
            return (
              <motion.div
                className="name"
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <motion.span
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.div>
            );
          })}
        </motion.h3>
        <motion.h3 aria-label={text} role="heading">
          {text2.split(" ").map((word, index) => {
            return (
              <motion.div
                className="role"
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <motion.span
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.div>
            );
          })}
        </motion.h3>
        <button type="button" class="btn btn-outline-dark">
          Hire me
        </button>
      </div>
      <div className="header--image">
        <img src={man} alt="man"></img>
      </div>
    </div>
  );
};

export default Header;

/* const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`; */

/* export default function AnimatedTitle() {
 
  return (
    <motion.h3 aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <motion.div
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.div>
        );
      })}
    </motion.h3>
  );
} */
