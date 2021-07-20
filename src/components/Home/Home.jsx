// import { useEffect } from 'react'
// import { easter } from '../../utils/easterEgg'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import './home.css'

const homeVariants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
}

const Home = () => {
  // useEffect(() => {
  //   easter()
  // }, [])

  return (
    <motion.section className="section_home" variants={homeVariants}>
      <ul className="ul__links">
        <li>
          <a
            href="https://github.com/Nicolas-alt"
            target="_blank"
            rel="noreferrer"
          >
            <i className="i__socialLink bx bxl-github" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Nicolas35103573"
            target="_blank"
            rel="noreferrer"
          >
            <i className="i__socialLink bx bxl-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="i__socialLink bx bxl-linkedin" />
          </a>
        </li>
      </ul>
      <p>Hi, my name is</p>
      <AnimateLetters text="Nicolas Jiménez" />
      <p>and I code for the web</p>
    </motion.section>
  )
}

const letterVariants = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1
    }
  }
}

const AnimateLetters = ({ text }) => {
  return (
    <motion.h1 variants={homeVariants} initial="initial" animate="animate">
      {[...text].map((letter, index) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

AnimateLetters.propTypes = {
  text: PropTypes.string.isRequired
}

export default Home
