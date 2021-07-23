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
          <h3>I&apos;m a web developer</h3>
          <p>
            Desarrollador front-end con React js, estudiante en una tecnología
            en desarrollo de software, apasionado por el desarrollo web. En sus
            ratos libres disfruta unas buenas partidas en Pubg. Me interesa el
            desarrollo de aplicaciones híbridas con React-Native y Flutter.
          </p>
        </div>
      </div>
      <div className="div__earth">
        <h3 className="h3__earthText">
          Ready to work in an <span>awesome</span> ideas.
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
