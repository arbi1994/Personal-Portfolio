module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-smoothscroll`,
        {
          resolve: "gatsby-plugin-react-svg",
          options: {
            rule: {
              include: /assets/ // See below to configure properly
            }
          }
        },
        {
          resolve: `gatsby-source-sanity`,
          options: {
            projectId: `mc7i5mpo`,
            dataset: `production`,
            // If the Sanity GraphQL API was deployed using `--tag <name>`,
            // use `graphqlTag` to specify the tag name. Defaults to `default`.
            graphqlTag: 'default',
          },
        },
    ]
}