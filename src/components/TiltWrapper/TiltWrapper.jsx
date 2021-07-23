import Tilt from 'react-parallax-tilt'
import PropTypes from 'prop-types'

const TiltWrapper = ({ children }) => {
  return (
    <Tilt tiltMaxAngleX="5" tiltMaxAngleY="5">
      {children}
    </Tilt>
  )
}

TiltWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default TiltWrapper
