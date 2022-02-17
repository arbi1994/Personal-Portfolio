import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// hooks 
import useWindowSize from '../hooks/useWindowSize';

const GearSmall = () => {
  const width = useWindowSize();

  return (
    <Parallax 
      speed={width <= 768 ? 0 : 8}
      rotate={[180, 0]}
    >
      <svg 
        width="96" 
        height="92" 
        viewBox="0 0 96 92" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M71.664 22.885C75.4804 26.6401 78.2619 31.2462 79.758 36.2882H90V53.544H79.758C78.2637 58.5901 75.4821 63.2003 71.664 66.9588L76.794 75.4688L61.206 84.0938L56.088 75.5838C50.7811 76.8665 45.2249 76.8665 39.918 75.5838L34.794 84.0938L19.206 75.4688L24.336 66.9588C20.5179 63.2003 17.7363 58.5901 16.242 53.544H6V36.294H16.242C17.7363 31.2479 20.5179 26.6377 24.336 22.8792L19.2 14.375L34.782 5.75H34.8L39.924 14.2485C45.2309 12.9658 50.7871 12.9658 56.094 14.2485L61.2 5.75H61.212L76.8 14.375L71.67 22.885H71.664ZM66 44.919C66 40.344 64.1036 35.9564 60.7279 32.7214C57.3523 29.4864 52.7739 27.669 48 27.669C43.2261 27.669 38.6477 29.4864 35.2721 32.7214C31.8964 35.9564 30 40.344 30 44.919C30 49.494 31.8964 53.8816 35.2721 57.1166C38.6477 60.3516 43.2261 62.169 48 62.169C52.7739 62.169 57.3523 60.3516 60.7279 57.1166C64.1036 53.8816 66 49.494 66 44.919Z" fill="#F2F2F2"/>
      </svg>
    </Parallax>
  )
}

export default GearSmall