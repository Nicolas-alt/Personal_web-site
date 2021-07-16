import { useEffect, useState } from 'react'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import SocialLinks from './components/SocialLinks/SocialLinks'
import './styles/global.css'
import './styles/normalize.css'

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
    <>
      <Home />
      <Experience />
      <About />
      <Footer />
      <SocialLinks showMenu={shouldShowActions} />
    </>
  )
}

export default App
