import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';   
// Styles
import * as styles from './styles.module.scss';
// Components
import Wrapper from '../Wrapper/Wrapper';
import BackgroundImages from '../BackgroundImages/BackgroundImages';
// Images
import projectsImages from '../Projects/images';
import aboutImages from '../About/images';
import contactImages from '../Contact/images';

const Container = ({ title }) => {

  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <Wrapper title={title} />
        <BackgroundImages 
          projectsImages={projectsImages}
          aboutImages={aboutImages} 
          contactImages={contactImages} 
          title={title} 
        />
      </div>
    </ParallaxProvider>
  )
};

export default Container;
