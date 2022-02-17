import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// Svgs
import Blob from './Blob';
import GuyThinking from './GuyThinking';

const images = [
  {
    src: <Blob />,
    class: styles.blob
  },
  {
    src: <GuyThinking />,
    class: styles.guy
  }
]

export default images;