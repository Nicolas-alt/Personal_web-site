import './footer.css'

const Footer = () => {
  return (
    <footer>
      <h3>Interested to work with me?</h3>
      <a className="a__contact" href="mailto:contactnicolas31@gmail.com">
        Let&apos;s talk
      </a>
      <div>
        <a
          href="https://github.com/Nicolas-alt"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github" />
        </a>
        <a
          href="https://twitter.com/Nicolas35103573"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin" />
        </a>
      </div>
      <p>© 2021 Created by Nicolas Jiménez</p>
    </footer>
  )
}

export default Footer
