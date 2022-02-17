import React from 'react';

const BackgroundImages = ({
  projectsImages,
  aboutImages,
  contactImages,
  title 
}) => {
  const renderedImagesProjects = projectsImages?.map((image, index) => 
    <div 
      key={index} 
      className={image.class} 
      style={{zIndex: "-1"}}
    >
      {image.src}
    </div>
  )

  const renderedImagesAbout = aboutImages?.map((image, index) => {
    return (
      <div key={index} className={image.class}>
        {image.src}
      </div>
    )
  })

  const renderedImagesContact = contactImages?.map((image, index) => {
    return (
      <div key={index} className={image.class}>
        {image.src}
      </div>
    )
  })

  const displayContent = () => {
    if(title === 'Projects') {
      return renderedImagesProjects
    }else if(title === 'About'){
      return renderedImagesAbout
    }else {
      return renderedImagesContact
    }
  }

  return (
    <>
      {displayContent()}
    </>
  )
};

export default BackgroundImages;