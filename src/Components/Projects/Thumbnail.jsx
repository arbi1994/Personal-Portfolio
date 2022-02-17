import React from 'react';
import sanityClient from '../../client';
import { Link } from "gatsby";
import { IconContext } from "react-icons";
// Styles
import * as styles from './styles.module.scss';
// icons
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Thumbnail = ({ 
  header, 
  subheader, 
  image, 
  links
}) => {

  const renderedLinks = links.map(link => {

    function setIcon (icon) {
      if(icon === "Creation") return <RiCompassDiscoverLine/>
      if(icon === "Code") return <BsGithub />

      return <CgWebsite />
    }

    return (
      <IconContext.Provider key={link.title} value={{color: 'white', className: styles.icon}}>
        <li>
          <Link 
            to={link.path}
            target={link.title !== 'Creation' ? '_blank' : null}
            rel={link.title !== 'Creation' ? 'nofollow noopener' : null}
          >
            <h6>{link.title}</h6>
            {setIcon(link.title)}
          </Link>
        </li>
      </IconContext.Provider>
    )
  })

  return (
    <div className={styles.thumbnail}>
      <div className={styles.thumbnailOuter}>
        <div className={styles.thumbnailInner}>
          <img alt="project-1" src={image} />

          <div className={styles.thumbnailWrapper}>
            <div className={styles.thumbnailTitle}>
              <h3>{header}</h3>
              <h5>{subheader}</h5>
            </div>
            <div className={styles.thumbnailLinks}>
              {renderedLinks}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Thumbnail;
