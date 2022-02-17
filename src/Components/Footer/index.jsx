import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// helper functions
import { getCurrentYear } from '../../helpers/getDate';

const index = () => {
  return (
    <footer 
      className={styles.footer}
      style={{textAlign: 'center', padding: '1em 4em'}}
    >
      <p>Designed and Built by <strong>Arber Shyti</strong> &copy; {getCurrentYear()}</p>
    </footer>
  )
};


export default index;
