import React from 'react';
// styles 
import * as styles from './styles.module.scss';

const Header = ({children}) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
};

export default Header;
