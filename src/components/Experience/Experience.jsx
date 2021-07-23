import Project from '../Project/Project'
import imageDvr from '../../assets/img/DvR.png'
import imagechat from '../../assets/img/Chat.png'
import './experience.css'

const Experience = () => (
  <section className="section_experience">
    <h2 className="h2_experienceTitle">Experience</h2>
    <Project
      typeProject="Chat - Full-Stack"
      title="Sluck-web"
      description="Full stack chat application where you can share your thoughts and meet with your friends."
      styleName="article__project article__project--normal"
      textStyleName="div__info div__info--normal"
      nameTec={[
        { name: 'ReactJS', ico: 'react' },
        { name: 'NodeJS', ico: 'nodejs' }
      ]}
      imageProject={imagechat}
      urlProject="https://github.com/Nicolas-alt/Sluck-web"
    />
    <Project
      typeProject="Blog - Front-end"
      title="Developer Road"
      description="The platform where Developers share knowledge about technology and programming, I helped to Built a responsive web app using Django and Bootstrap that allows users to write tech post."
      styleName="article__project article__project--reverse"
      textStyleName="div__info div__info--reverse"
      nameTec={[
        { name: 'Bootstrap', ico: 'bootstrap' },
        { name: 'Css3', ico: 'css3' }
      ]}
      imageProject={imageDvr}
      urlProject="https://developerroad.herokuapp.com/"
    />
  </section>
)

export default Experience
