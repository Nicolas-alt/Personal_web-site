import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { memo, Suspense } from 'react'
import Earth from '../Earth/Earth'
import './about.css'

const About = () => {
  return (
    <section className="section__about">
      <div className="div_about">
        <div className="div__text">
          <h2>About Me</h2>
          <p>
            Hello! I&apos;m Nicolas Jiménez front-end developer i love building
            interfaces and code interactive productucts, I&apos;m looking for a
            full time position as a front-end developer.
          </p>
          <p>
            My interest in web development started back in 2017 when I decided
            to try undertand the console web tools, fast-forward to today My
            main focus these days is building accessible, inclusive products and
            digital experiences.
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div
            className="div__stackContainer"
            style={{ justifyContent: 'space-evenly', width: '90%' }}
          >
            <div className="div__stack">
              <i className="bx bxl-react" />
              <span>ReactJS</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-bootstrap" />
              <span>Bootstrap</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-sass" />
              <span>Sass</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-nodejs" />
              <span>NodeJS</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-redux" />
              <span>Redux</span>
            </div>
          </div>
        </div>
      </div>
      <div className="div__earth">
        <h3 className="h3__earthText">
          Ready to work in <span>increibles</span> ideas.
        </h3>
        <Canvas
          style={{ height: '100vh' }}
          camera={{ zoom: 20, position: [40, 5, 10] }}
        >
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Earth />
            <Stars
              radius={100}
              depth={1}
              count={5000}
              factor={4}
              saturation={0}
              fade
            />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </section>
  )
}

export default memo(About)
