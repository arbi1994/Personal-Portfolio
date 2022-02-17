// images
import project_1 from '../images/Projects/project-img.svg';
import project_2 from '../images/Projects/project_2.svg';

const projectsData = [
  {
    header: '321 movies',
    subheader: 'Another cinephile web app',
    img: project_1,
    links: [
      {
        path: '/321-movies',
        title: 'Creation',
      },
      {
        path: 'https://github.com/arbi1994/movies-app',
        title: 'Code',
      },
      {
        path: 'https://321moviesinfo.com',
        title: 'Visit it',
      },
    ]
  },
  {
    header: 'The village cafe',
    subheader: 'A cafe restaurant website',
    img: project_2,
    links: [
      {
        path: '/the-village-cafe',
        title: 'Creation',
      },
      {
        path: 'https://github.com/arbi1994/the-village-cafe',
        title: 'Code',
      },
      {
        path: 'https://villagecafe.net.au',
        title: 'Visit it',
      },
    ]
  },
]

export default projectsData;