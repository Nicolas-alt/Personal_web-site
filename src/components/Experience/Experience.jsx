import Project from '../Project/Project'
import TiltWrapper from '../TiltWrapper/TiltWrapper'
import './experience.css'

const Experience = () => (
  <TiltWrapper>
    <section className="section_experience">
      <h2 className="h2_experienceTitle">Experience</h2>
      <Project
        typeProject="Blog - Front-end"
        title="Developer Road"
        description="The platform where Developers share knowledge about technology and programming, I helped to Built a responsive web app using Django and Bootstrap that allows users to write tech post."
        styleName="article__project article__project--normal"
        textStyleName="div__info div__info--normal"
        nameTec={[
          { name: 'Django', ico: 'python' },
          { name: 'Bootstrap', ico: 'bootstrap' },
          { name: 'Css3', ico: 'css3' }
        ]}
      />
      <Project
        typeProject="Chat - Full-Stack"
        title="Sluck"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum,
          error sequi laudantium aperiam consectetur, ad illum animi laborum
          dolor quaerat dolorem! Tempore velit fuga officiis provident maiores
          obcaecati amet."
        styleName="article__project article__project--reverse"
        textStyleName="div__info div__info--reverse"
        nameTec={[
          { name: 'ReactJS', ico: 'react' },
          { name: 'NodeJS', ico: 'nodejs' }
        ]}
      />
    </section>
  </TiltWrapper>
)

export default Experience
