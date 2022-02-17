import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// hooks
import useSectionIdentifier from '../../hooks/useSectionIdentifier';
// Components
import Container from '../Container/Container';
import Wrapper from '../Wrapper/Wrapper';

const Contact = () => {
  const ref = useSectionIdentifier(document.getElementById('box-4'))

  const title = "Contact";

  return (
    <section ref={ref} id="contact" className={styles.contact}>
      <Container title={title}>
        <Wrapper title={title} />
      </Container>
    </section>
  )
};

export default Contact;
