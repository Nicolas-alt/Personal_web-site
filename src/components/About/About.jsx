import { useTranslation } from 'react-i18next'
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { memo, Suspense } from 'react'
import Earth from '../Earth/Earth'
import './about.css'

const About = () => {
  const [t] = useTranslation('global')
  return (
    <section className="section__about">
      <div className="div_about">
        <div className="div__text">
          <h2>{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <div
            className="div__stackContainer"
            style={{ justifyContent: 'space-evenly', width: '90%' }}
          >
            <div className="div__stack">
              <i className="bx bxl-react" />
              <span>ReactJS</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-redux" />
              <span>Redux</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-nodejs" />
              <span>NodeJS</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-sass" />
              <span>Sass</span>
            </div>
            <div className="div__stack">
              <i className="bx bxl-bootstrap" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
      <div className="div__earth">
        <h3 className="h3__earthText">{t('about.finalText')}</h3>
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
