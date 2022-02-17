// const path = require('path');

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   console.log("Page - ", page.path)

//   if(page.path.match(/^\/projects/)) {
//     createPage({
//       path: "/projects",
//       matchPath: 'projects/*',
//       component: path.resolve(`src/pages/projects.js`),
//     })
//   }
// }