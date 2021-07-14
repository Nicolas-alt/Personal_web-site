import './about.css'

const About = () => {
  return (
    <section className="section__about">
      <h2>About Me</h2>
      {/* Only for short devices */}
      <div className="div--text">
        <h3>I&apos;m a web developer</h3>
        <p>
          Desarrollador front-end con React js, estudiante en una tecnología en
          desarrollo de software, apasionado por el desarrollo web. En sus ratos
          libres disfruta unas buenas partidas en Pubg. Me interesa el
          desarrollo de aplicaciones híbridas con React-Native y Flutter.
        </p>
      </div>
    </section>
  )
}

export default About
