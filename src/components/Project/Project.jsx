import PropTypes from 'prop-types'
import imageProject from '../../assets/img/DvR.png'
import './project.css'

const Project = ({
  typeProject,
  title,
  description,
  styleName,
  textStyleName
}) => {
  return (
    <article className={styleName}>
      <div className={textStyleName}>
        <h4>{typeProject}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="https://f.com">View project</a>
        <div className="div__stackContainer">
          <div className="div__stack">
            <i className="bx bxl-react" />
            <span>ReactJS</span>
          </div>
        </div>
      </div>
      <img src={imageProject} alt="Project" />
    </article>
  )
}

Project.propTypes = {
  typeProject: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  textStyleName: PropTypes.string.isRequired
}

export default Project
