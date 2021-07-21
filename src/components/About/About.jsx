import Earth from '../Earth/Earth'
import meImage from '../../assets/img/me.jpg'
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
        <img src={meImage} alt="Developer" />
      </div>
      <div className="div__earth">
        <h3 className="h3__earthText">
          Ready to work in an <span>awesome</span> ideas.
        </h3>
        <Earth />
      </div>
    </section>
  )
}

export default About
