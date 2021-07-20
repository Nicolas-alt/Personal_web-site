import { motion } from 'framer-motion'
import imageProject from '../../assets/img/DvR.png'
import './project.css'

const Project = () => {
  return (
    <article className="article__project">
      <div>
        <h4>Blog</h4>
        <h2>Developer Road</h2>
        <a href="https://f.com">View project</a>
        <div>
          <div>
            <i className="bx bxl-react" />
            <span>ReactJS</span>
          </div>
        </div>
      </div>
      <motion.img
        src={imageProject}
        alt="Project"
        whileHover={{ scale: 0.94 }}
      />
    </article>
  )
}

export default Project
