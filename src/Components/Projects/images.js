import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// Components
import Lamp from '../../assets/Lamp';
import GearMedium from '../../assets/GearMedium';
import GearSmall from '../../assets/GearSmall';
import GearMini from '../../assets/GearMini';
import GearMicro from '../../assets/GearMicro';
import ToolsMedium from '../../assets/ToolsMedium';
import ToolsMicro from '../../assets/ToolsMicro';

const images = [
  {
    src: <Lamp />,
    class: styles.lamp
  },
  {
    src: <GearMedium />,
    class: styles.gearMedium,
  },
  {
    src: <GearSmall />,
    class: styles.gearSmall,
  },
  {
    src: <GearMini />,
    class: styles.gearMini,
  },
  {
    src: <GearMicro />,
    class: styles.gearMicro,
  },
  {
    src: <ToolsMedium />,
    class: styles.toolsMedium,
  },
  {
    src: <ToolsMicro />,
    class: styles.toolsMicro,
  },
]

export default images;