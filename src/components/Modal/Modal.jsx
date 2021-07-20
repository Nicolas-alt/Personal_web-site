import { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ProjectContext } from '../../Providers/ProjectProvider'
import './modal.css'

const VARIANTS = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
}

const Modal = () => {
  const { showModal, setShowModal } = useContext(ProjectContext)

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.article
          variants={VARIANTS}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="article__modal"
        >
          <button type="button" onClick={() => setShowModal(!showModal)}>
            X
          </button>
        </motion.article>
      )}
    </AnimatePresence>
  )
}

export default Modal
