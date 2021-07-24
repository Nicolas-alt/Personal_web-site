import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { memo, Suspense, useEffect } from 'react'
import { easter } from '../../utils/easterEgg'
import Programmer from '../Programmer/Programmer'
import TiltWrapper from '../TiltWrapper/TiltWrapper'
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
  const [t] = useTranslation('global')

  useEffect(() => {
    easter()
  }, [])

  return (
    <TiltWrapper>
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
        <div className="div__home">
          <div className="div__homeContent">
            <p>{t('home.p')}</p>
            <div>
              <AnimateLetters text="Nicolas" styleName="h1__firtsName" />
              <br />
              <AnimateLetters text="Jiménez" styleName="h1__lastName" />
            </div>
            <div>
              <AnimateLetters text="Front" styleName="h1__firtsName" />
              <br />
              <AnimateLetters text="End Developer" styleName="h1__lastName" />
            </div>
          </div>
          <div className="div__homeContent">
            <Canvas
              style={{
                height: '80vh',
                borderRadius: '40%',
                cursor: 'grab'
              }}
              camera={{ zoom: 20, position: [40, 5, 10] }}
            >
              <ambientLight intensity={0.5} />
              <Suspense fallback={null}>
                <Programmer />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>
        </div>
      </motion.section>
    </TiltWrapper>
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

const AnimateLetters = ({ text, styleName }) => {
  return (
    <motion.h1
      variants={homeVariants}
      initial="initial"
      animate="animate"
      className={styleName}
    >
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
  text: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired
}

export default memo(Home)
