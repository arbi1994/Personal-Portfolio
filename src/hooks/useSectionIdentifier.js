import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Styles
import * as styles from '../Components/ScrollTracker/styles.module.scss';

const useSectionIdentifier = (el) => {
  const { inView, ref, entry } = useInView({
    rootMargin: '-250px'
  });

  function detectSection(){
    if(el !== null){
      inView ? el.classList.add(styles.gradient) : el.classList.remove(styles.gradient)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', detectSection())

    return () => window.removeEventListener('scroll', detectSection())
  }, [inView])

  return ref
};

export default useSectionIdentifier;
