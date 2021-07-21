import { motion } from 'framer-motion'
import imageProject from '../../assets/img/DvR.png'
import './project.css'

const Project = () => {
  return (
    <article className="article__project">
      <div className="div__info">
        <h4>Blog</h4>
        <h2>Developer Road</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum,
          error sequi laudantium aperiam consectetur, ad illum animi laborum
          dolor quaerat dolorem! Tempore velit fuga officiis provident maiores
          obcaecati amet.
        </p>
        <a href="https://f.com">View project</a>
        <div className="div__stackContainer">
          <div className="div__stack">
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
