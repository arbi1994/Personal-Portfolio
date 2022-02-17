import React from 'react';
// icons
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const contactData = [
  {
    header: "Let's work together",
    links: [
      {
        title: "E-mail",
        contact: "arbi.1994@hotmail.com",
        cta: "Email me",
        icon: <MdEmail />,
        url: `mailto:arbi.1994@hotmail.com`
      },
      {
        title: "Phone",
        contact: "(+61)422112920",
        cta: "Call me",
        icon: <BsFillTelephoneFill />,
        url: `tel:+61422112920`
      },
      {
        title: "Linkedin",
        contact: "in/arbershyti",
        cta: "Learn more about me",
        icon: <FaLinkedinIn />,
        url: `https://www.linkedin.com/in/arbershyti`
      },
    ]
  }
]

export default contactData;