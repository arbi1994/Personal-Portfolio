import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// hooks
import useSectionIdentifier from '../../hooks/useSectionIdentifier';
// images
import backgroundImages from './images';
// Components
import Container from '../Container/Container';
import Wrapper from '../Wrapper/Wrapper';

const Projects = () => {
  const ref = useSectionIdentifier(document.getElementById('box-2'))

  const title = "Projects"

  return (
    <section ref={ref} id="projects" className={styles.projects}>
      <Container images={backgroundImages} title={title}>
        <Wrapper title={title} />
      </Container>
    </section>
  )
};

export default Projects;
