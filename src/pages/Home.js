import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Typed from 'typed.js';

import '../assets/sass/templates/Home.scss';
import CustomHelmet from '../components/CustomHelmet';
import { easter } from '../utils/easterEgg';

const Home = () => {
  useEffect(() => {

    easter()
    new Typed('#dev', {
      strings: [
        'Front dev 🎨',
        'Entusiasta 🤩',
        'Developer 👾',
        'Web Developer 💻',
      ],
      loop: true,
      startDelay: 1000,
      typeSpeed: 80,
      backSpeed: 80,
    });
  }, []);

  return (
    <Fade top>
      <CustomHelmet
        titlePage="Nicolas Jiménez"
        contentText="Nicolas Jiménez, desarrollador web Bogotá. Codifico ideas."
        contentColor="#8a7dda"
      />
      <section className="section--home">
        <p>Hi there, i am</p>
        <h2>Nicolas Jiménez</h2>
        <p className="p--typed">
          I'm a <span id="dev"></span>
        </p>
        <Link to="/about">
          <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </section>
    </Fade>
  );
};

export default Home;
