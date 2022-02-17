import React from 'react';
// Styles
import * as styles from './styles.module.scss';

const Contacts = ({ header, links }) => {
  const renderedLinks = links?.map(({
    title,
    contact,
    cta,
    icon,
    url
  }) => {
    return (
      <div key={title} className={styles.link}>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.content}>
          <h5>{title}</h5>
          <p>{contact}</p>
          <a 
            href={url} 
            rel="noopener noreferrer nofollow" 
            target={title === 'Linkedin' ? "_blank" : null}
          >{cta}</a>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.contacts}>
      <div className={styles.header}>
        <h3>{header}</h3>
      </div>
      <div className={styles.contactLinks}>
        <div className={styles.linksWrapper}>
          {renderedLinks}
        </div>
      </div>
    </div>
  )
};

export default Contacts;
