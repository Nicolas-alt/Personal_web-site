import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './footer.css'

const Footer = () => {
  const [lenguage, setLenguage] = useState(true)
  const [t, i18n] = useTranslation('global')
  const letters = lenguage ? 'en' : 'es'

  const handleChangeLenguage = () => {
    i18n.changeLanguage(letters)
    setLenguage(!lenguage)
  }

  return (
    <footer>
      <h3>{t('footer.h3')}</h3>
      <a className="a__contact" href="mailto:contactnicolas31@gmail.com">
        {t('footer.a')}
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
      <p>{t('footer.p')}</p>
      <button type="button" onClick={() => handleChangeLenguage()}>
        {letters}
      </button>
    </footer>
  )
}

export default Footer
