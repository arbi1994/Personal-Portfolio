import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
// Styles
import * as styles from './styles.module.scss';
// data
import projectsData from '../../data/projects';
import aboutData from '../../data/about';
import contactData from '../../data/contact';
// Component
import Thumbnail from '../Projects/Thumbnail';
import Contacts from '../Contact/Contacts';

const Wrapper = ({ title }) => {
  const [thumbnailData, setThumbnailData] = useState()

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"]{
        title,
        subtitle,
        slug,
        link,
        image{
          asset->{
            _ref
          },
          title
        }
      }`)
      .then((data) => setThumbnailData(data))
      .catch(console.error)
  }, [])

  console.log(thumbnailData)

  const renderedThumbnails = projectsData?.map(({
    header, 
    subheader, 
    img,
    links
  }) => {
    return (
      <Thumbnail 
        key={header}
        header={header}
        subheader={subheader}
        image={img}
        links={links}
      />
    )
  })

  const renderedParagraph = aboutData?.map(({ paragraph }, index) => {
    return (
      <p key={index}>
        {paragraph}
      </p>
    )
  })

  const renderedContacts = contactData?.map(({
    header, 
    links
  }) => {
    return (
      <Contacts 
        key={header}
        header={header}
        links={links}
      />
    ) 
  })

  return (
    <div className={styles.innerWrapper}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div 
        className={styles.main} 
        // styles={{flexDirection: title === 'Projects' ? 'column' : 'row'}}
      >
        {title === 'Projects' ? renderedThumbnails : null}
        {title === 'About' ? renderedParagraph : null}
        {title === 'Contact' ? renderedContacts : null}
      </div>
    </div>
  )
};

export default Wrapper;
