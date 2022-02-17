import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// images
import Blob from './Blob';
import GuyStanding from './GuyStanding';

const images = [
  {
    src: <Blob />,
    class: styles.blob
  },
  {
    src: <GuyStanding />,
    class: styles.guy
  },
]

export default images;