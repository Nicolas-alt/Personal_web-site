import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import './socialLinks.css'

const SocialLinks = ({ showMenu }) => {
  return (
    <motion.ul
      className="ul_social"
      initial={{ opacity: 0 }}
      animate={{ opacity: showMenu ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <li>
        <a
          href="https://github.com/Nicolas-alt"
          target="_blank"
          rel="noreferrer"
        >
          <i className="i__socialLink bx bxl-github" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/Nicolas35103573"
          target="_blank"
          rel="noreferrer"
        >
          <i className="i__socialLink bx bxl-twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="i__socialLink bx bxl-linkedin" />
        </a>
      </li>
    </motion.ul>
  )
}

SocialLinks.propTypes = {
  showMenu: PropTypes.bool.isRequired
}

export default SocialLinks
