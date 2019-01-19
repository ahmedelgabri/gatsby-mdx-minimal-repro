const prism = require('@mapbox/rehype-prism')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        mdPlugins: [],
        hastPlugins: [[prism, { ignoreMissing: true }]],
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
  ],
}
