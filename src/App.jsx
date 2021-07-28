import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Modal from './components/Modal/Modal'
import SocialLinks from './components/SocialLinks/SocialLinks'
import ProjectProvider from './Providers/ProjectProvider'
import './styles/normalize.css'
import './styles/global.css'
import globalEn from './translations/en/global.json'
import globalEs from './translations/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

const App = () => {
  const [shouldShowActions, setShouldActions] = useState(false)
  const [lastYPos, setLastYPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const YPosition = window.scrollY
      const isScrollDown = YPosition > lastYPos
      setShouldActions(isScrollDown)
      setLastYPos(YPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastYPos])

  return (
    <I18nextProvider i18n={i18next}>
      <ProjectProvider>
        <Home />
        <Experience />
        <About />
        <Footer />
        <Modal />
        <SocialLinks showMenu={shouldShowActions} />
      </ProjectProvider>
    </I18nextProvider>
  )
}

export default App
