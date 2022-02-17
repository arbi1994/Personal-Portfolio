import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// images
// import blob from '../../images/home/blob.svg';
import HomeBlob from '../../assets/HomeBlob';
// hooks
import useSectionIdentifier from '../../hooks/useSectionIdentifier';

const Home = ({children}) => {
  const ref = useSectionIdentifier(document.getElementById('box-1'))

  return (
    <section ref={ref} id="home" className={styles.home}>
      {children}
      {/* <img alt="" src={blob} className={styles.homeBackground}/> */}
      <HomeBlob />
    </section>
  )
};

export default Home;
