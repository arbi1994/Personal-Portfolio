import React from 'react';
import { useSpring, animated } from 'react-spring';
// Styles
import * as styles from './styles.module.scss';
// Components
import ScrollDownArrow from '../../assets/ScrollDownArrow';

const Hero = () => {
  const headerTwoStyle = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -100 },
    delay: 500,
  })

  const headeFourStyle = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 50 },
    delay: 1000,
  })

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.header}>
          <animated.h2 style={headerTwoStyle}>Arber Shyti</animated.h2>
          <animated.h4 style={headeFourStyle}>Creative Front-end developer</animated.h4>
        </div>
        <div className={styles.imgContainer}>
          <ScrollDownArrow />
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
          <h5>scroll down</h5>
        </div>
      </div>
    </div>
  )
};

export default Hero;
