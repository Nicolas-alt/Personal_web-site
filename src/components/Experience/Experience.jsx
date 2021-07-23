import Project from '../Project/Project'
import TiltWrapper from '../TiltWrapper/TiltWrapper'
import './experience.css'

const Experience = () => (
  <TiltWrapper>
    <section className="section_experience">
      <h2 className="h2_experienceTitle">Experience</h2>
      <Project
        typeProject="Blog"
        title="Developer Road"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum,
          error sequi laudantium aperiam consectetur, ad illum animi laborum
          dolor quaerat dolorem! Tempore velit fuga officiis provident maiores
          obcaecati amet."
        styleName="article__project article__project--normal"
        textStyleName="div__info div__info--normal"
      />
      <Project
        typeProject="Blog"
        title="Developer Road"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum,
          error sequi laudantium aperiam consectetur, ad illum animi laborum
          dolor quaerat dolorem! Tempore velit fuga officiis provident maiores
          obcaecati amet."
        styleName="article__project article__project--reverse"
        textStyleName="div__info div__info--reverse"
      />
    </section>
  </TiltWrapper>
)

export default Experience
