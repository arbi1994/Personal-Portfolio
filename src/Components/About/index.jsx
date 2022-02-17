import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// hooks
import useSectionIdentifier from '../../hooks/useSectionIdentifier';
// Components
import Container from '../Container/Container';
import Wrapper from '../Wrapper/Wrapper';

const About = () => {
  const ref = useSectionIdentifier(document.getElementById('box-3'))

  const title = "About";

  return (
    <section ref={ref} id="about" className={styles.about}>
      <Container title={title}>
        <Wrapper title={title}/>
      </Container>
    </section>
  )
};

export default About;
