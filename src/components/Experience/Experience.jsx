import { useTranslation } from 'react-i18next'
import Project from '../Project/Project'
import imageDvr from '../../assets/img/DvR.png'
import imagechat from '../../assets/img/Chat.png'
import './experience.css'

const Experience = () => {
  const [t] = useTranslation('global')

  const data = [
    {
      typeProject: 'Chat - Full-Stack',
      title: 'Sluck-web',
      description: t('experience.project1Text'),
      styleName: 'article__project article__project--normal',
      textStyleName: 'div__info div__info--normal',
      nameTec: [
        { name: 'ReactJS', ico: 'react' },
        { name: 'NodeJS', ico: 'nodejs' }
      ],
      imageProject: imagechat,
      urlProject: 'https://github.com/Nicolas-alt/Sluck-web'
    },
    {
      typeProject: 'Blog - Front-end',
      title: 'Developer Road',
      description: t('experience.project2Text'),
      styleName: 'article__project article__project--reverse',
      textStyleName: 'div__info div__info--reverse',
      nameTec: [
        { name: 'Bootstrap', ico: 'bootstrap' },
        { name: 'Css3', ico: 'css3' }
      ],
      imageProject: imageDvr,
      urlProject: 'https://developerroad.herokuapp.com/'
    }
  ]

  return (
    <section className="section_experience">
      <h2 className="h2_experienceTitle">{t('experience.title')}</h2>
      {data.map(
        ({
          typeProject,
          title,
          description,
          styleName,
          textStyleName,
          nameTec,
          imageProject,
          urlProject
        }) => (
          <Project
            typeProject={typeProject}
            title={title}
            description={description}
            styleName={styleName}
            textStyleName={textStyleName}
            nameTec={nameTec}
            imageProject={imageProject}
            urlProject={urlProject}
            key={urlProject}
          />
        )
      )}
    </section>
  )
}

export default Experience
