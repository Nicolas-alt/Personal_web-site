import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ProjectContext = createContext(null)

const ProjectProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <ProjectContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ProjectContext.Provider>
  )
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProjectProvider
