import PropTypes from 'prop-types'
import imageProject from '../../assets/img/DvR.png'
import './project.css'

const Project = ({
  typeProject,
  title,
  description,
  styleName,
  textStyleName,
  nameTec
}) => {
  return (
    <article className={styleName}>
      <div className={textStyleName}>
        <h4>{typeProject}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="https://f.com">View project</a>
        <div className="div__stackContainer">
          {nameTec.map(({ name, ico }) => (
            <div
              className="div__stack"
              key={name + ico}
              style={{ marginRight: '10px' }}
            >
              <i className={`bx bxl-${ico}`} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <i className="bx bxl-django" />
      <img src={imageProject} alt="Project" />
    </article>
  )
}

Project.propTypes = {
  typeProject: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  textStyleName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  nameTec: PropTypes.array.isRequired
}

export default Project
